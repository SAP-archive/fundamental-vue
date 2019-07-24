<script>
export default {
  name: "FdSectionTitle",
  props: {
    tag: {
      type: String,
      default: "h3"
    }
  },
  render(h) {
    const tag = this.tag;
    return h(tag, { class: "fd-section__title" }, [this.$slots.default]);
  }
};
</script>
