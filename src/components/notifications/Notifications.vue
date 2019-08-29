<template>
  <div :class="computedContainerClasses" :style="computedContainerStyles">
    <fd-alert
      :key="item.id"
      :type="item.type"
      :dismissible="false"
      :class="item.animation.class"
      v-for="item in notifications"
      @click.native="onManualDismiss(item)"
    >
      <slot>
        <div v-if="item.title" class="fd-notification__title" v-html="item.title"></div>
        <div class="fd-notification__content" v-html="item.content"></div>
      </slot>
    </fd-alert>
  </div>
</template>

<script>
import FdAlert from "../Alert/Alert.vue";
import { eventsBus, events } from "./EventsBus";

/** @typedef { import('./notifications.types').NewNotificationOpts } NewNotificationOpts */

const config = {
  defaultTimeout: 2000,
  animationDuration: 400,
  fadeInAnimationClass: "fadeIn",
  fadeOutAnimationClass: "fadeOut"
};

export default {
  name: "FdNotifications",
  components: { FdAlert },
  props: {
    group: {
      //  the name of this notifications group, this will allow the
      // user to have multiple notifications groups for easier control
      type: String,
      default: ""
    },
    position: {
      // array of 2 elements to specify the position of this group
      type: Array,
      default: () => ["top", "right"],
      validator: value => {
        return (
          value.length === 2 &&
          ["bottom", "top"].indexOf(value[0]) >= 0 &&
          ["left", "right", "center"].indexOf(value[1]) >= 0
        );
      }
    },
    customStyles: {
      // custom styles that will be applied to the container
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      notifications: [],
      defaultStyles: {
        maxWidth: "400px"
      }
    };
  },
  methods: {
    /** Create the required notification object and adds it to the list
     * @param {NewNotificationOpts} opts
     */
    addNotification(opts) {
      if (!this.isTargetGroup(opts)) {
        return;
      }
      const notification = {
        id: opts.id,
        type: opts.type,
        title: opts.title,
        content: opts.content,
        onDismiss: opts.onDismiss,
        dismissible: opts.dismissible || true,
        animation: {
          class: config.fadeInAnimationClass
        }
      };

      if (opts.timeout || !opts.permanent) {
        notification.timeout = config.timeout || config.defaultTimeout;
        notification.timer = setTimeout(() => {
          this.destroyNotification(notification);
        }, notification.timeout);
      } else {
        notification.permanent = true;
      }
      this.notifications.push(notification);
    },
    /**
     * Destroy the notification on user click in cases it is dismissable
     */
    onManualDismiss(notification) {
      if (notification.dismissible) {
        this.destroyNotification(notification);
      }
    },
    /**
     * Hide the notification and do the required cleanup
     */
    destroyNotification(notification) {
      notification.animation.class = config.fadeOutAnimationClass;

      // hide notification timer if it's not permanent
      if (!notification.permanent && notification.timer) {
        clearTimeout(notification.timer);
      }
      // wait for animation to finish and remove the notification from the list
      setTimeout(() => {
        this.notifications = this.notifications.filter(n => n.id !== notification.id);
        if (notification.onDismiss && typeof notification.onDismiss === "function") {
          notification.onDismiss(notification);
        }
      }, config.animationDuration);
    },
    /**
     * Remove all the notifications
     */
    dismissAll() {
      this.notifications.forEach(this.destroyNotification);
    },
    /**
     * In case an existing id was passed, clear the notification that has it
     */
    dismissById(id) {
      const notification = this.notifications.find(n => n.id === id);
      if (notification) {
        this.destroyNotification(notification);
      }
    },
    /**
     * Check if this is the correct notifications group
     */
    isTargetGroup(opts) {
      opts.group = opts.group || "";
      return opts.group === this.group;
    },
    /**
     * Called when the bus emits the hideAll event
     */
    onHideAll(group) {
      if (group !== null && group !== undefined && !this.isTargetGroup({ group })) {
        return;
      }
      this.dismissAll();
    },
    /**
     * Called when the bus emits the hide event
     */
    onHideSingle(opts) {
      if (!this.isTargetGroup(opts)) {
        return;
      }
      this.dismissById(opts.id);
    }
  },
  computed: {
    computedContainerClasses() {
      return [
        "fd-notifications__group",
        `fd-notifications__group--${this.position[0]}`,
        `fd-notifications__group--${this.position[1]}`
      ];
    },
    computedContainerStyles() {
      return { ...this.defaultStyles, ...this.customStyles };
    }
  },
  mounted() {
    eventsBus.$on(events.hide, this.onHideSingle);
    eventsBus.$on(events.hideAll, this.onHideAll);
    eventsBus.$on(events.show, this.addNotification);
  },
  beforeDestroy() {
    eventsBus.$off(events.hide, this.onHideSingle);
    eventsBus.$off(events.hideAll, this.onHideAll);
    eventsBus.$off(events.show, this.addNotification);
  }
};
</script>

<style lang="scss">
@import "_notifications.styles";
@import "_notifications.animations";
</style>
