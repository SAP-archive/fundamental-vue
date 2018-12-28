import { Prop, Base, Component } from '@/core';
import { Inject } from 'vue-property-decorator';
import { SideNavItem } from './SideNavItem';
import { Store } from './Model';

interface Props {
  hidden: boolean;
}

// Contains SubItems
@Component('SideNavSubList')
export class SideNavSubList extends Base<Props> {
  @Prop(Boolean, { default: null })
  public hidden!: boolean | null;

  @Inject(Store.KEY)
  public store!: Store;

  @Inject(SideNavItem.KEY) public parentItem!: SideNavItem;

  private get currentHidden(): boolean {
    const hidden = this.hidden;
    if(hidden != null) { return hidden; }
    return !this.store.expanded(this.parentItem.itemId);
  }

  public render() {
    return (
      <ul class='fd-side-nav__sublist' aria-hidden={this.currentHidden}>
        {this.$slots.default}
      </ul>
    );
  }
}
