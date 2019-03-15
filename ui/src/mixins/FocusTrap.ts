import Vue from "vue";
import createFocusTrap, { FocusTrap, Options } from "focus-trap";

export default Vue.extend({
  data() {
    return {
      fdFocusTrap: undefined as FocusTrap | undefined
    };
  },
  methods: {
    initializeFocusTrap(element: Element, options?: Options): void {
      const domNode = element as HTMLElement;
      this.fdFocusTrap = createFocusTrap(domNode, options);
    },
    activateFocusTrap(): void {
      if (typeof this.fdFocusTrap === "undefined") return;

      this.fdFocusTrap.activate();
    },
    deactivateFocusTrap(): void {
      if (typeof this.fdFocusTrap === "undefined") return;

      this.fdFocusTrap.deactivate();
    }
  }
});
