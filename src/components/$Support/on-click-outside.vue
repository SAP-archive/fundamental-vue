// @ts-check
<script>
// Thanks @LinusBorg
const isBrowser = typeof window !== "undefined" && typeof document !== undefined;
const getRootEl = () => document.documentElement;

const CLICK_OUTSIDE_EVENT = "do";

// Our awesome click outside-component comes with a few nice enhancements.
// You use this component in order to detect clicks outside of a component/element.
// For example:
// ```markup
// <fd-on-click-outside @do="handleClickOutside" :active="true" >
//   hello world
// </fd-on-click-outside>
// ```
// This detects all clicks outside of fd-on-click-outside.
// By default fd-on-click-outside is rendering it's default slot

export default {
  name: "fd-on-click-outside",
  props: {
    ignoredElements: { type: Function, default: () => [] },
    active: { type: Boolean, default: false }
  },
  render() {
    return this.$scopedSlots.default();
  },
  beforeDestroy() {
    if (!isBrowser) {
      return;
    }
    // We have to remove ourselves as a listener but only if we are indeed active (=listening) and
    // there is a documentElement.
    if (this.active) {
      getRootEl().removeEventListener("click", this.click, false);
    }
  },
  methods: {
    click(event) {
      const { target } = event;
      if (target == null) {
        return;
      }
      const targetNode = target;

      const isClickOnSelf = this.$el.contains(targetNode);
      if (isClickOnSelf) {
        return;
      }

      // We now have to check the ignored elements
      const ignoredElements = this.ignoredElements();
      for (const ignoredElement of ignoredElements) {
        if (ignoredElement.contains(targetNode)) {
          return;
        }
      }
      this.$emit(CLICK_OUTSIDE_EVENT, event);
    },
    activeDidChange(isActive, wasActive) {
      if (!isBrowser) {
        return;
      }
      // We are listening for clicks on the documentElement.
      const root = getRootEl();
      if (isActive && !wasActive) {
        root.addEventListener("click", this.click, false);
      }
      if (!isActive && wasActive) {
        root.removeEventListener("click", this.click, false);
      }
    }
  },
  watch: {
    active: {
      immediate: true,
      handler(isActive, wasActive) {
        setTimeout(() => {
          this.activeDidChange(isActive, wasActive);
        });
      }
    }
  }
};
</script>
