import Vue, { CreateElement, VNode } from "vue";
import { warn } from "@/core";

const CLICK_OUTSIDE_EVENT = "clickOutside";

// Our awesome click away component comes with a few nice enhancements.
// You use this component in order to detect clicks outside of a component/element.
// For example:
//
// <ClickAwayContainer @clickOutside="handleClickOutside">
//   hello world
// </ClickAwayContainer>
//
// This detects all clicks outside of ClickAwayContainer.
// By default ClickAwayContainer is rendering itself as a div-element.
// You can change that by setting the tag-prop.
export default Vue.extend({
  props: {
    ignoredElements: { type: Function, default: () => () => [] },
    tag: { type: String, default: "div" },
    active: { type: Boolean, default: false }
  },
  render(h: CreateElement): VNode {
    return h(this.tag, this.$slots.default);
  },
  beforeDestroy() {
    // We have to remove ourselves as a listener but only if we are indeed active (=listening) and
    // there is a documentElement.
    const { body } = document;
    if (this.active && body != null) {
      this.$el.removeEventListener("click", this.click);
      body.removeEventListener("click", this.click);
    }
  },
  methods: {
    click({ target }: Event) {
      if (target == null) {
        return;
      }
      const targetNode = target as Node;

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
    activeDidChange(isActive: boolean, wasActive: boolean) {
      const { documentElement } = document;
      // We are listening for clicks on the documentElement. Listening for clicks
      // on the body elements also works but less reliably. For example if the height
      // the body element is < 100% there will be places on the page which will
      // emit nothing when clicked.
      if (documentElement == null) {
        warn(
          `v-${this}: Cannot do anything without a documentElement element.`
        );
        return;
      }
      if (isActive && !wasActive) {
        this.$el.addEventListener("click", this.click, false);
        documentElement.addEventListener("click", this.click, false);
      }
      if (!isActive && wasActive) {
        this.$el.removeEventListener("click", this.click, false);
        documentElement.removeEventListener("click", this.click, false);
      }
    }
  },
  watch: {
    active: {
      immediate: true,
      handler(isActive: boolean, wasActive: boolean): void {
        setTimeout(() => {
          this.activeDidChange(isActive, wasActive);
        });
      }
    }
  }
});
