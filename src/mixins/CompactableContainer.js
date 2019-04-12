export default {
  provide() {
    return { compactableContainer: this };
  },
  props: {
    compact: {
      type: Boolean,
      default: false
    }
  }
};
