import {
  Component,
  Prop,
  Provide,
  Inject,
} from 'vue-property-decorator';
import { componentName } from '@/util';
import { SideNavItem } from './SideNavItem';
import { SideNav } from './SideNav';
import { API } from '@/api';
import TsxComponent from '@/vue-tsx';

interface Props {
  value?: string | null;
  header?: string | null;
}

@Component({ name: componentName('SideNavList') })
@API.Component('Side Nav List', comp => {
  comp
    .addEvent('select', 'Sent when a item was clicked', event => event.raw('item', 'Item'))
    .addEvent('input', 'Sent when a item was clicked', event => event.string('itemId'));
})
export class SideNavList extends TsxComponent<Props> {
  @API.Prop('value of the selected item', prop => prop.type(String))
  @Prop({ type: String, default: null, required: false })
  public value!: string | null;

  @API.Prop('header', build => {
    build
      .describe('text displayed in the side nav list (group) header')
      .type(Boolean);
  })
  @Prop({ type: String, required: false, default: null })
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
