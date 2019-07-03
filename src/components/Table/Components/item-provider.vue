<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      require: true
    }
  },
  provide() {
    return {
      fdTableItemProvider: this.fdTableItemProvider
    };
  },
  render() {
    return this.$scopedSlots.default();
  },
  watch: {
    selected(selected) {
      this.fdTableItemProvider.selected = selected;
    },
    item(item) {
      this.fdTableItemProvider.item = item;
    }
  },
  data() {
    return {
      fdTableItemProvider: {
        item: this.item,
        selected: this.selected
      }
    };
  }
};
</script>
