<template>
  <transition name="fade">
    <div :id="uid" v-show="visible" :class="classes" role="alert">
      <button
        v-if="dismissible"
        class="fd-alert__close"
        :aria-controls="uid"
        aria-label="Close"
        @click="dismiss"
      />
      <slot />
    </div>
  </transition>
</template>

<script lang="ts">
import { mixins, Uid } from "@/mixins";

export default mixins(Uid).extend({
  name: "FdAlert",
  model: {
    prop: "visible",
    event: "change"
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
      validator: (value: string) => {
        return (
          ["default", "warning", "error", "information", "success"].indexOf(
            value
          ) >= 0
        );
      }
    }
  },
  methods: {
    dismiss(): void {
      this.$emit("dismiss");
      this.$emit("change", false);
    }
  },
  computed: {
    classes(): string[] {
      const type = this.type === "default" ? [] : [`fd-alert--${this.type}`];
      const dismissible = this.dismissible ? [] : ["fd-alert--dismissible"];
      return ["fd-alert", ...type, ...dismissible];
    }
  }
});
</script>
