export default {
  inject: {
    compactableContainer: { default: { compact: false } }
  },
  computed: {
    enclosedByCompactContainer(): boolean {
      // @ts-ignore
      return this.compactableContainer.compact;
    },
    compact() {
      return this.enclosedByCompactContainer;
    }
  }
};
