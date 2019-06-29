<script>
// The title of a tile. `fd-tile-title` should be a child of `fd-tile-content`.
export default {
  name: "FdTileTitle",
  props: {
    // Custom HTML-tag used for the tile title.
    tag: {
      type: String,
      // By default a tile title will be rendered as an h3-element. You should change that if it does not fit your structure.
      default: "h3"
    }
  },
  render(h) {
    return h(this.tag, { class: "fd-tile__title" }, this.$slots.default);
  }
};
</script>
