export default {
  inject: {
    $_FdCompactMixin: {
      default: null
    }
  },

  props: {
    compact: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    finalCompact() {
      return this.compact || (this.$_FdCompactMixin && this.$_FdCompactMixin.data.value);
    }
  }
};
