import './ExpandTransition.css';
import { Vue, Component } from 'vue-property-decorator';
import { componentName } from '@/util';

const addClass = (element: Element, className: string) => {
  if (element.classList.contains(className)) { return; }
  element.classList.add(className);
};

const removeClass = (element: Element, className: string) => {
  if (!element.classList.contains(className)) { return; }
  element.classList.remove(className);
};

// Grabbed from Element
@Component({ name: componentName('ExpandTransition') })
export class ExpandTransition extends Vue {
  public beforeEnter(el) {
    addClass(el, 'collapse-transition');
    if (!el.dataset) { el.dataset = {}; }

    el.dataset.oldPaddingTop = el.style.paddingTop;
    el.dataset.oldPaddingBottom = el.style.paddingBottom;

    el.style.height = '0';
    el.style.paddingTop = 0;
    el.style.paddingBottom = 0;
  }

  public enter(el) {
    el.dataset.oldOverflow = el.style.overflow;
    if (el.scrollHeight !== 0) {
      el.style.height = el.scrollHeight + 'px';
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    } else {
      el.style.height = '';
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    }

    el.style.overflow = 'hidden';
  }

  public afterEnter(el) {
    // for safari: remove class then reset height is necessary
    removeClass(el, 'collapse-transition');
    el.style.height = '';
    el.style.overflow = el.dataset.oldOverflow;
  }

  public beforeLeave(el) {
    if (!el.dataset) { el.dataset = {}; }
    el.dataset.oldPaddingTop = el.style.paddingTop;
    el.dataset.oldPaddingBottom = el.style.paddingBottom;
    el.dataset.oldOverflow = el.style.overflow;

    el.style.height = el.scrollHeight + 'px';
    el.style.overflow = 'hidden';
  }

  public leave(el) {
    if (el.scrollHeight !== 0) {
      // for safari: add class after set height, or it will jump to zero height suddenly, weired
      addClass(el, 'collapse-transition');
      el.style.height = 0;
      el.style.paddingTop = 0;
      el.style.paddingBottom = 0;
    }
  }

  public afterLeave(el) {
    removeClass(el, 'collapse-transition');
    el.style.height = '';
    el.style.overflow = el.dataset.oldOverflow;
    el.style.paddingTop = el.dataset.oldPaddingTop;
    el.style.paddingBottom = el.dataset.oldPaddingBottom;
  }
  public render() {
    return (
      <transition
        name={'expand'}
        on-after-leave={element => this.afterLeave(element)}
        on-leave={element => this.leave(element)}
        on-before-leave={element => this.beforeLeave(element)}
        on-after-enter={element => this.afterEnter(element)}
        on-enter={element => this.enter(element)}
        on-before-enter={element => this.beforeEnter(element)}
      >
        {this.$slots.default}
      </transition>
    );
  }
}
