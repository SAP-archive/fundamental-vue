import { Component } from '@/core';
import { ItemId } from './Mixins';
import { mixins } from 'vue-class-component';
import { Provide, Inject } from 'vue-property-decorator';
import { Store } from './Model';

@Component('SideNavItem')
export class SideNavItem extends mixins(ItemId) {
  public static KEY = Symbol();

  @Provide(SideNavItem.KEY) public parentItem = this;
  @Inject(Store.KEY) public store!: Store;

  public render() {
    return (
      <li class='fd-side-nav__item'>
        {this.$slots.default}
      </li>
    );
  }

  public mounted() {
    this.store.registerItem(this.itemId);
  }

  public beforeDestroy() {
    this.store.unregisterItem(this.itemId);
  }
}
