import { componentName } from '@/util';
import { Component, Inject, Prop } from 'vue-property-decorator';
import { MenuItem } from './MenuItem';
import { Menu } from './Menu';
import { Api } from '@/api';
import { MENU, MENU_LIST } from './types';
import TsxComponent from '@/vue-tsx';

interface Props {
  header?: string | null;
}

@Component({
  name: componentName('MenuList'),
  provide() {
    return {
      [MENU_LIST]: this,
    };
  },
})
@Api.Component('Menu List')
@Api.Event('select', 'Sent when a menu item was selected', ['item', 'MenuItem'])
@Api.defaultSlot('0 or more menu items.')
export class MenuList extends TsxComponent<Props> {
  @Api.Prop('header', build => {
    build
      .describe('text displayed in the menu list (group) header')
      .type(Boolean);
  })
  @Prop({ type: String, required: false, default: null })
  public header!: string | null;

  @Inject({ from: MENU, default: null }) public menu!: Menu | null;

  public render() {
    const items = this.$slots.default;
    const renderList = () => <ul class='fd-menu__list'>{items}</ul>;
    const header = this.header;
    if (header == null) {
      return renderList();
    }
    return (
      <div class='fd-menu__group'>
        <h1 class='fd-menu__title'>{header}</h1>
        {renderList()}
      </div>
    );
  }

  public menuItemDidClick(item: MenuItem) {
    this.$emit('select', item.value);
    const menu = this.menu;
    if (menu) {
      menu.menuItemDidClick(item);
    }
  }
}
