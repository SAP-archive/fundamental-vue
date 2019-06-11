export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  provide() {
    return {
      fdItemProvider: this.fdItemProvider
    };
  },
  render() {
    return this.$scopedSlots.default();
  },
  watch: {
    item: {
      immediate: true,
      handler(newItem) {
        this.fdItemProvider.item = newItem;
      }
    }
  },
  data() {
    return {
      fdItemProvider: {
        item: this.item
      }
    };
  }
};
