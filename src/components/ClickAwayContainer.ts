import Vue, { CreateElement, VNode } from 'vue';
import { warn } from '@/core';

const CLICK_OUTSIDE_EVENT = 'clickOutside';

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
    tag: { type: String, default: 'div' },
    active: { type: Boolean, default: false },
  },
  render(h: CreateElement): VNode {
    return h(this.tag, this.$slots.default);
  },
  beforeDestroy() {
    // We have to remove ourselves as a listener but only if we are indeed active (=listening) and
    // there is a documentElement.
    const { body } = document;
    if (this.active && body != null) {
      this.$el.removeEventListener('click', this.clickOnSelf);
      body.removeEventListener('click', this.clickOnBody);
    }
  },
  methods: {
    clickOnBody(event: Event) {
      this.$emit(CLICK_OUTSIDE_EVENT, event);
    },
    clickOnSelf(event: Event) {
      event.stopPropagation();
    },
  },
  watch: {
    active: {
      immediate: true,
      handler(isActive: boolean, wasActive: boolean) {
        const { body } = document;
        if (body == null) {
          warn(`v-${this}: Cannot do anything without a body element.`);
          return;
        }
        if (isActive && !wasActive) {
          this.$el.addEventListener('click', this.clickOnSelf);
          body.addEventListener('click', this.clickOnBody);
        }
        if (!isActive && wasActive) {
          this.$el.removeEventListener('click', this.clickOnSelf);
          body.removeEventListener('click', this.clickOnBody);
        }
      },
    },
  },
});
