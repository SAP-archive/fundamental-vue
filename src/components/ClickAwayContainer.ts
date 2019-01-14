import { Watch } from 'vue-property-decorator';
import { CreateElement, VNode } from 'vue';
import { warn, Component, Prop, Base } from '@/core';

type IgnoredElements = () => Element[];

interface Props {
  tag?: string;
  active?: boolean;
  ignoredElements?: IgnoredElements;
}

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
@Component('ClickAwayContainer')
export class ClickAwayContainer extends Base<Props> {
  @Prop({ type: String, default: 'div' })
  public tag!: string;

  @Prop({ type: Boolean, default: false })
  public active!: boolean;

  @Prop({ type: Function, default: () => () => [] })
  public ignoredElements!: IgnoredElements;

  public render(h: CreateElement): VNode {
    return h(this.tag, this.$slots.default);
  }

  public beforeDestroy() {
    // We have to remove ourselves as a listener but only if we are indeed active (=listening) and
    // there is a documentElement.
    const { documentElement } = document;
    if(this.active && documentElement != null) {
      documentElement.removeEventListener('click', this.handleClick, false);
    }
  }

  private handleClick(event: MouseEvent) {
    const path = event.composedPath();
    const isClickOutsideSelf = !path.includes(this.$el);
    if(isClickOutsideSelf === false) {
      return;
    }
    // We now have to check the ignored elements
    const ignoredElements = this.ignoredElements();
    for(const ignoredElement of ignoredElements) {
      if(path.includes(ignoredElement)) {
        return;
      }
    }
    this.$emit(CLICK_OUTSIDE_EVENT, event);
  }

  @Watch('active', { immediate: true })
  public handleActiveDidChange(isActive: boolean, wasActive: boolean) {
    const { documentElement } = document;
    if(documentElement == null) {
      warn(`v-${this}: Cannot do anything without a document element.`);
      return;
    }
    if(isActive && !wasActive) {
      documentElement.addEventListener('click', this.handleClick, false);
    }
    if(!isActive && wasActive) {
      documentElement.removeEventListener('click', this.handleClick, false);
    }
  }
}
