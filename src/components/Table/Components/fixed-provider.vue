<script>
export default {
  props: {
    fixed: {
      type: Boolean,
      required: true
    }
  },
  provide() {
    return {
      fdTableFixedProvider: this.fdTableFixedProvider
    };
  },
  render() {
    const defaultSlot = this.$scopedSlots.default;
    if (defaultSlot == null) {
      return null;
    }
    return defaultSlot();
  },
  watch: {
    fixed(fixed) {
      this.fdTableFixedProvider.fixed = fixed;
    }
  },
  data() {
    return {
      fdTableFixedProvider: {
        fixed: this.fixed
      }
    };
  }
};
</script>
