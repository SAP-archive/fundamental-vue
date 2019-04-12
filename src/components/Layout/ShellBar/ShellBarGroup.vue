<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
const positionMapping = {
  start: "start",
  middle: "middle",
  end: "end"
};
const Positions = Object.keys(positionMapping);
const isPosition = value => Positions.indexOf(value) >= 0;

export default {
  name: "FdShellBarGroup",
  props: {
    position: { type: String, validator: isPosition }
  },
  computed: {
    classes() {
      return [`fd-shellbar__group fd-shellbar__group--${this.position}`];
    }
  }
};
</script>
