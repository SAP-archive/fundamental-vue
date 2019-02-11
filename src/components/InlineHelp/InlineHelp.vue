<template>
  <span class="fd-inline-help">
    <span :class="classes"><slot /></span>
  </span>
</template>

<script lang="ts">
import Vue from "vue";
import { PropValidator } from "vue/types/options";

const positionMapping = {
  left: "left",
  right: "right", // default
  center: "center"
};

type Position = keyof (typeof positionMapping);
const Positions = Object.values(positionMapping);
const isValidPosition = (value: string) => Positions.indexOf(value) >= 0;

export default Vue.extend({
  name: "FdInlineHelp",
  props: {
    position: {
      type: String,
      default: positionMapping.right,
      validator: isValidPosition
    } as PropValidator<Position>,
    inline: { type: Boolean, default: false }
  },
  computed: {
    classes(): object {
      return {
        "fd-inline-help__content": true,
        "fd-inline-help__content--bottom-left":
          this.position === "left" && this.inline === false,
        "fd-inline-help__content--bottom-right":
          this.position === "right" && this.inline === false,
        "fd-inline-help__content--bottom-center":
          this.position === "center" && this.inline === false,
        "fd-inline-help__content--left":
          this.position === "left" && this.inline === true,
        "fd-inline-help__content--right":
          this.position === "right" && this.inline === true
      };
    }
  }
});
</script>
