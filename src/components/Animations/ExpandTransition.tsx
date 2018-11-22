import './ExpandTransition.sass';
import { Vue, Component } from 'vue-property-decorator';
import { componentName } from '@/util';

// Use data('Key') when you want to create a dataset-key. By doing so you ensure to only get properly
// namespaces keys.
const dataKey = (name: string) => `fdExpandTransition${name}`;

const addClass = ({ classList }: Element, className: string) => {
  if (classList.contains(className)) { return; }
  classList.add(className);
};

const removeClass = ({classList}: Element, className: string) => {
  if (!classList.contains(className)) { return; }
  classList.remove(className);
};

// Grabbed from Element
@Component({ name: componentName('ExpandTransition') })
export class ExpandTransition extends Vue {
  public beforeEnter(el: HTMLElement) {
    addClass(el, 'collapse-transition');
    el.dataset[dataKey('OldPaddingTop')] = el.style.paddingTop || undefined;
    el.dataset[dataKey('OldPaddingBottom')] = el.style.paddingBottom || undefined;
    el.style.height = '';
    el.style.paddingTop = '';
    el.style.paddingBottom = '';
  }

  public enter(el: HTMLElement) {
    el.dataset[dataKey('OldOverflow')] = el.style.overflow || undefined;
    if (el.scrollHeight !== 0) {
      el.style.height = el.scrollHeight + 'px';
      el.style.paddingTop = el.dataset[dataKey('OldPaddingTop')] || null;
      el.style.paddingBottom = el.dataset[dataKey('OldPaddingBottom')] || null;
    } else {
      el.style.height = '';
      el.style.paddingTop = el.dataset[dataKey('OldPaddingTop')] || null;
      el.style.paddingBottom = el.dataset[dataKey('OldPaddingBottom')] || null;
    }
    el.style.overflow = 'hidden';
  }

  public afterEnter(el: HTMLElement) {
    removeClass(el, 'collapse-transition');
    el.style.height = '';
    el.style.overflow = el.dataset[dataKey('OldOverflow')] || null;
  }

  public beforeLeave(el: HTMLElement) {
    el.dataset[dataKey('OldPaddingTop')] = el.style.paddingTop || undefined;
    el.dataset[dataKey('OldPaddingBottom')] = el.style.paddingBottom || undefined;
    el.dataset[dataKey('OldOverflow')] = el.style.overflow || undefined;

    el.style.height = el.scrollHeight + 'px';
    el.style.overflow = 'hidden';
  }

  public leave(el: HTMLElement) {
    if (el.scrollHeight !== 0) {
      addClass(el, 'collapse-transition');
      el.style.height = '0';
      el.style.paddingTop = '0';
      el.style.paddingBottom = '0';
    }
  }

  public afterLeave(el: HTMLElement) {
    removeClass(el, 'collapse-transition');
    el.style.height = '';
    el.style.overflow = el.dataset[dataKey('OldOverflow')] || null;
    el.style.paddingTop = el.dataset[dataKey('OldPaddingTop')] || null;
    el.style.paddingBottom = el.dataset[dataKey('OldPaddingBottom')] || null;
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
