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

// Alerts provide messages within the application that are color-coded to emphasize the level of urgency. Supports `v-model`.
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
        // Fire when the visibility of the alert changed.
        // @arg `true` if the alert becamse visible – otherwise `false`.
        this.$emit("visible", this.currentVisible);
      }
    }
  },
  props: {
    // If `true`, a close button is rendered that closes the alert.
    dismissible: {
      type: Boolean,
      default: true
    },
    // If `true` the alert is displayed.
    visible: {
      type: Boolean,
      default: true
    },
    // Type of the alert.
    type: {
      // `default` / `warning` / `error` / `information` / `success`
      type: String,
      default: "default",
      validator: value => {
        return ["default", "warning", "error", "information", "success"].indexOf(value) >= 0;
      }
    }
  },
  methods: {
    // @vuese
    // Used to manually dismiss the alert.
    dismiss() {
      this.currentVisible = false;
      // Fired once the alert has been dismissed.
      this.$emit("dismiss");
    }
  },
  computed: {
    classes() {
      const type = this.type === "default" ? [] : [`fd-alert--${this.type}`];
      const dismissible = this.dismissible ? ["fd-alert--dismissible"] : [];
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
