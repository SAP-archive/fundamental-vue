import { Inject } from 'vue-property-decorator';
import { SideNavItem } from './SideNavItem';
import { SideNav } from './SideNav';
import { SIDE_NAV } from './shared';
import { Component, Event, DefaultSlot, Prop, Base } from '@/core';

interface Props {
  value?: string | null;
  header?: string | null;
}

@Component('SideNavList')
@Event('select', 'Sent when a item was clicked', ['item', 'Item'])
@Event('input', 'Sent when a item was clicked', ['itemId', String])
@DefaultSlot('Side Navigation Items or Side Navigation Submenus.')
export class SideNavList extends Base<Props> {
  @Prop('value of the selected item', { type: String, default: null })
  public value!: string | null;

  public get activeItemId(): string | null {
    const nav = this.sideNav;
    if(nav != null) {
      return nav.activeIndexPath;
    }
    return this.localActiveItemId;
  }
  private localActiveItemId: string | null = this.value;

  @Prop('text displayed in the side nav list (group) header', { type: String, default: null })
  public header!: string | null;

  @Inject({ from: SIDE_NAV, default: null })
  private sideNav!: SideNav | null;

  public render() {
    const itemsOrSubmenus = this.$slots.default;
    const renderList = () => {
      return <ul class='fd-side-nav__list'>{itemsOrSubmenus}</ul>;
    };
    const header = this.header;
    if (header == null) {
      return renderList();
    }

    return (
      <div class='fd-side-nav__group'>
        <h1 class='fd-side-nav__title'>{header}</h1>
        {renderList()}
      </div>
    );
  }

  public didClickSideNavItem(item: SideNavItem) {
    this.$emit('select', item);
    this.$emit('input', item.itemId);
    this.localActiveItemId = item.itemId;
    const nav = this.sideNav;
    if (nav != null) { nav.didClickSideNavItem(item); }
  }
}
