import {
  Component,
  Prop,
  Inject,
} from 'vue-property-decorator';
import { componentName } from '@/util';
import { SideNavItem } from './SideNavItem';
import { SideNav } from './SideNav';
import { Api } from '@/api';
import TsxComponent from '@/vue-tsx';
import { ITEM_LIST, SIDE_NAV } from './shared';

interface Props {
  value?: string | null;
  header?: string | null;
}

@Component({
  name: componentName('SideNavList'),
  provide() {
    return {[ITEM_LIST]: this};
  },
})
@Api.Component('Side Nav List', comp => {
  comp
    .addEvent('select', 'Sent when a item was clicked', event => event.raw('item', 'Item'))
    .addEvent('input', 'Sent when a item was clicked', event => event.string('itemId'));
})
@Api.defaultSlot('Side Navigation Items or Side Navigation Submenus.')
export class SideNavList extends TsxComponent<Props> {
  @Api.Prop('value of the selected item', prop => prop.type(String))
  @Prop({ type: String, default: null, required: false })
  public value!: string | null;

  public get activeItemId(): string | null {
    const nav = this.sideNav;
    if(nav != null) {
      return nav.activeItemId;
    }
    return this.localActiveItemId;
  }
  private localActiveItemId: string | null = this.value;

  @Api.Prop('header', build => {
    build
      .describe('text displayed in the side nav list (group) header')
      .type(Boolean);
  })
  @Prop({ type: String, required: false, default: null })
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
