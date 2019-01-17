import { warn, Prop, Base, Component } from '@/core';
import { Inject } from 'vue-property-decorator';
import { Store } from './Model';
import { SideNavSubItem } from './SideNavSubItem';

// Contains Text
interface Props {
  to: string | object; // correct type: VueRouter.RawLocation;
}
@Component('SideNavSubLink')
export class SideNavSubLink extends Base<Props> {
  @Inject(Store.KEY) public store!: Store;
  @Inject(SideNavSubItem.KEY) public parentItem!: SideNavSubItem;

  @Prop('to', {
    type: [Object, String],
    default: '#',
  })
  public to!: object | string;

  private get selected(): boolean {
    return this.store.selected(this.parentItem.itemId);
  }

  private get classes() {
    return { 'is-selected': this.selected };
  }

  public render() {
    return (
      <a
        href='#'
        on-click={this.onClick}
        staticClass='fd-side-nav__sublink'
        class={this.classes}
        aria-selected={this.selected}
      >
        {this.$slots.default}
      </a>
    );
  }

  private onClick(event: Event) {
    event.preventDefault();
    event.stopPropagation();

    this.store.selectedId = this.parentItem.itemId;

    const { to, $router } = this;
    if (to != null) {
      if($router != null) {
        $router.push(to);
      } else {
        warn(`Tried to navigate to ${to} but $router not found.`);
      }
    }
    this.$emit('click', this);
  }
}
