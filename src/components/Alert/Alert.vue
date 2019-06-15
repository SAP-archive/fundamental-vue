<template>
  <transition name="fade">
    <div :id="uid" v-show="currentVisible" :class="classes" role="alert">
      <button
        v-if="dismissible"
        class="fd-alert__close"
        :aria-controls="uid"
        aria-label="Close"
        @click="dismiss"
      />
      <!-- Content of the alert. -->
      <slot />
    </div>
  </transition>
</template>

<script>
import { Uid } from "./../../mixins";

export default {
  name: "FdAlert",
  model: {
    prop: "visible",
    event: "visible"
  },
  mixins: [Uid],
  watch: {
    visible: {
      immediate: true,
      handler(visible) {
        this.currentVisible = visible;
        this.$emit("visible", this.currentVisible);
      }
    }
  },
  props: {
    dismissible: {
      type: Boolean,
      default: true
    },
    visible: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: "default",
      validator: value => {
        return (
          ["default", "warning", "error", "information", "success"].indexOf(
            value
          ) >= 0
        );
      }
    }
  },
  methods: {
    dismiss() {
      this.currentVisible = false;
      this.$emit("dismiss");
    }
  },
  computed: {
    classes() {
      const type = this.type === "default" ? [] : [`fd-alert--${this.type}`];
      const dismissible = this.dismissible ? [] : ["fd-alert--dismissible"];
      return ["fd-alert", ...type, ...dismissible];
    }
  },
  data() {
    return {
      currentVisible: this.visible
    };
  }
};
</script>
