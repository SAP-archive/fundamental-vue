import { Prop, Base, Component } from '@/core';
import { RawLocation } from 'vue-router';
import { Inject } from 'vue-property-decorator';
import { Store } from './Model';
import { SideNavSubItem } from './SideNavSubItem';

// Contains Text
interface Props {
  to: RawLocation;
}
@Component('SideNavSubLink')
export class SideNavSubLink extends Base<Props> {
  @Inject(Store.KEY) public store!: Store;
  @Inject(SideNavSubItem.KEY) public parentItem!: SideNavSubItem;

  @Prop('to', { type: [Object, String], default: '#' })
  public to!: RawLocation;

  private get selected(): boolean {
    return this.store.selected(this.parentItem.itemId);
  }

  private get classes() {
    return { 'is-selected': this.selected };
  }

  public render() {
    return (
      <router-link
        nativeOnClick={this.onClick}
        tag='a'
        to={this.to}
        staticClass='fd-side-nav__sublink'
        class={this.classes}
        aria-selected={this.selected}
      >
        {this.$slots.default}
      </router-link>
    );
  }

  private onClick(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.store.selectedId = this.parentItem.itemId;
  }
}
