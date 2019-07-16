<template>
  <span class="fd-inline-help">
    <span :class="classes"><slot /></span>
  </span>
</template>

<script>
const positionMapping = {
  left: "left",
  right: "right", // default
  center: "center"
};

const Positions = Object.keys(positionMapping);
const isValidPosition = value => Positions.indexOf(value) >= 0;

export default {
  name: "FdInlineHelp",
  props: {
    position: {
      type: String,
      default: positionMapping.right,
      validator: isValidPosition
    },
    inline: { type: Boolean, default: false }
  },
  computed: {
    classes() {
      return {
        "fd-inline-help__content": true,
        "fd-inline-help__content--bottom-left": this.position === "left" && this.inline === false,
        "fd-inline-help__content--bottom-right": this.position === "right" && this.inline === false,
        "fd-inline-help__content--bottom-center":
          this.position === "center" && this.inline === false,
        "fd-inline-help__content--left": this.position === "left" && this.inline === true,
        "fd-inline-help__content--right": this.position === "right" && this.inline === true
      };
    }
  }
};
</script>
