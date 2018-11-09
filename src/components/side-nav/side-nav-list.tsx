import {
  Component,
  Prop,
  Provide,
  Vue,
  Inject,
} from 'vue-property-decorator';

import { componentName } from '@/util';
import { SideNavItem } from './side-nav-item';
import { SideNav } from './side-nav';
import { API } from '@/api';

@Component({ name: componentName('side-nav-list') })
@API.Component('Side Nav List', comp => {
  comp
    .addEvent('select', 'Sent when a item was clicked', event => event.raw('item', 'Item'))
    .addEvent('input', 'Sent when a item was clicked', event => event.string('itemId'));
})
export class SideNavList extends Vue {
  @Prop({ type: String, default: null, required: false })
  @API.Prop('value of the selected item', prop => prop.type(String))
  public value!: string | null;

  @Prop({ type: String, required: false, default: null })
  @API.Prop('header', build => {
    build
      .describe('text displayed in the side nav list (group) header')
      .type(Boolean);
  })
  public header!: string | null;

  @Inject() private sideNav!: SideNav | null;
  @Provide() public navList = this;

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
    const nav = this.sideNav;
    if (nav != null) { nav.didClickSideNavItem(item); }
  }
}
