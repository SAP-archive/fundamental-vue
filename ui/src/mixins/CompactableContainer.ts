import Vue from "vue";

export default {
  beforeCreate() {
    // @ts-ignore
    this.compactableContainer = Vue.observable({ compact: false });
  },
  provide(): object {
    // @ts-ignore
    return { compactableContainer: this.compactableContainer };
  },
  watch: {
    compact: {
      immediate: true,
      handler(newCompact: boolean) {
        // @ts-ignore
        this.compactableContainer.compact = newCompact;
      }
    }
  },
  props: {
    compact: {
      type: Boolean,
      default: false
    }
  }
};
