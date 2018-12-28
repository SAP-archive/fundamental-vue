import { Component } from '@/core';
import { ItemId } from './Mixins';
import { mixins } from 'vue-class-component';
import { Provide, Inject } from 'vue-property-decorator';
import { Store } from './Model';
import { SideNavItem } from './SideNavItem';

@Component('SideNavSubItem')
export class SideNavSubItem extends mixins(ItemId) {
  public static KEY = Symbol();
  @Provide(SideNavSubItem.KEY) public parentSubItem = this;
  @Inject(Store.KEY) public store!: Store;
  @Inject(SideNavItem.KEY) public parentItem!: SideNavItem;

  public mounted() {
    this.store.registerSubItem({
      itemId: this.itemId,
      parentId: this.parentItem.itemId,
    });
  }

  public beforeDestroy() {
    this.store.unregisterItem(this.itemId);
  }

  public render() {
    return (
      <li class='fd-side-nav__subitem'>
        {this.$slots.default}
      </li>
    );
  }
}
