export default {
  props: {
    subItem: {
      type: Object,
      required: true
    }
  },
  provide() {
    return {
      fdSubItemProvider: this.fdSubItemProvider
    };
  },
  render() {
    return this.$scopedSlots.default();
  },
  watch: {
    subItem: {
      immediate: true,
      handler(newItem) {
        this.fdSubItemProvider.subItem = newItem;
      }
    }
  },
  data() {
    return {
      fdSubItemProvider: {
        subItem: this.subItem
      }
    };
  }
};
