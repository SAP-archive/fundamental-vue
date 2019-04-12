export default {
  inject: {
    compactableContainer: { default: { compact: false } }
  },
  computed: {
    enclosedByCompactContainer() {
      return this.compactableContainer.compact;
    },
    compact() {
      return this.enclosedByCompactContainer;
    }
  }
};
