<template>
  <div
    class="fd-tile"
    :class="classes"
    :role="isButton ? 'button' : null"
    :aria-disabled="String(disabled)"
    v-on="listeners"
  >
    <slot />
  </div>
</template>
<script>
// A tile component can be used to display information in a simple container format. This component is ideal for displaying collection data when a grid or list layout is preferred. See `fd-tile-grid` and `fd-virtualized-list`.
export default {
  name: "FdTile",
  props: {
    // If true, the file has no background color – it becomes transparent. This is used in combination with fd-virtualized-list in order to render rows. Since this prop relies on custom styles you have to include the Fundamental Vue supporting styles.
    transparent: { type: Boolean, default: false },
    // If true, the tile behaves like a button and emits `click` is not disabled.
    isButton: { type: Boolean, default: false },
    // Disables the tile.
    disabled: { type: Boolean, default: false },
    // Number of rows this tile spans when used inside `fd-tile-grid`
    rowSpan: { type: Number, default: null },
    // Number of columns this tile spans when used inside `fd-tile-grid`
    colSpan: { type: Number, default: null }
  },
  methods: {
    handleClick(event) {
      if (this.disabled || !this.isButton) {
        return;
      }
      // Fired only for button-tiles (`is-button` must be `true`).
      this.$emit("click", event);
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        click: this.handleClick
      };
    },
    classes() {
      return [
        this.transparent ? "fdv-tile--transparent" : "",
        this.rowSpan != null ? `fd-has-grid-row-span-${this.rowSpan}` : "",
        this.colSpan != null ? `fd-has-grid-column-span-${this.colSpan}` : ""
      ];
    }
  }
};
</script>

<style lang="scss">
@import "./tile";
</style>
