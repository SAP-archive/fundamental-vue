<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  name: "FdTileGrid",
  props: {
    col: {
      type: Number,
      default: null,
      validator: value => value >= 2 && value <= 6
    }
  },
  computed: {
    classes() {
      const col = this.col;
      const colClass = col == null ? {} : { [`fd-tile-grid--${col}col`]: true };
      return {
        "fd-tile-grid": true,
        ...colClass
      };
    }
  }
};
</script>
