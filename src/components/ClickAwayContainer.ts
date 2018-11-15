// Our awesome click away directive comes with a few nice enhancements.

import {
  Component,
  Prop,
  Watch,
} from 'vue-property-decorator';
import TsxComponent from '@/vue-tsx';
import { VNode } from 'vue';
import { componentName } from '@/util';

interface Props {
  tag?: string;
  active?: boolean;
}

const CLICK_OUTSIDE_EVENT = 'clickOutside';

@Component({ name: componentName('ClickAwayContainer') })
export class ClickAwayContainer extends TsxComponent<Props> {
  @Prop({ type: String, default: 'div' }) public tag!: string;
  @Prop({ type: Boolean, default: false }) public active!: boolean;

  public render(createElement): VNode {
    return createElement(this.tag, this.$slots.default);
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
    const isClickOutside = !path.includes(this.$el);
    if(isClickOutside) {
      this.$emit(CLICK_OUTSIDE_EVENT);
    }
  }

  @Watch('active', { immediate: true })
  public handleActiveDidChange(isActive: boolean, wasActive: boolean) {
    const { documentElement } = document;
    if(documentElement == null) {
      console.warn(`v-${this}: Cannot do anything without a document element.`);
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
