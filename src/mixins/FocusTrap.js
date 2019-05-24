import createFocusTrap from "focus-trap";

export default {
  data() {
    return {
      fdFocusTrap: undefined
    };
  },
  methods: {
    pauseFocusTrap() {
      this.fdFocusTrap.pause();
    },
    unpauseFocusTrap() {
      this.fdFocusTrap.unpause();
    },
    initializeFocusTrap(element, options) {
      this.fdFocusTrap = createFocusTrap(element, options);
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
