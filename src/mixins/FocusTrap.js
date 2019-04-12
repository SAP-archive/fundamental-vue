import createFocusTrap from "focus-trap";

export default {
  data() {
    return {
      fdFocusTrap: undefined
    };
  },
  methods: {
    initializeFocusTrap(element, options) {
      const domNode = element;
      this.fdFocusTrap = createFocusTrap(domNode, options);
    },
    activateFocusTrap() {
      if (typeof this.fdFocusTrap === "undefined") return;

      this.fdFocusTrap.activate();
    },
    deactivateFocusTrap() {
      if (typeof this.fdFocusTrap === "undefined") return;

      this.fdFocusTrap.deactivate();
    }
  }
};
