import Vue from "vue";
import createFocusTrap, { FocusTrap, Options } from "focus-trap";

let focusTrap: FocusTrap;

export default Vue.extend({
  methods: {
    initializeFocusTrap(element: Element, options?: Options): void {
      const domNode = element as HTMLElement;
      focusTrap = createFocusTrap(domNode, options);
    },
    activateFocusTrap(): void {
      if (typeof focusTrap === "undefined") return;

      focusTrap.activate();
    },
    deactivateFocusTrap(): void {
      if (typeof focusTrap === "undefined") return;

      focusTrap.deactivate();
    }
  }
});
