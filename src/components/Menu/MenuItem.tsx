import { Component, Prop, Inject } from 'vue-property-decorator';
import { MenuList } from './MenuList';
import { Menu } from './Menu';
import { componentName } from '@/util';
import { Api } from '@/api';
import { MENU, MENU_LIST } from './types';
import TsxComponent from '@/vue-tsx';

interface Props {
  value?: string | number | null;
}

@Component({ name: componentName('MenuItem') })
@Api.Component('Menu Item')
@Api.Event('click', 'Sent when the itme was clicked')
@Api.defaultSlot('Content displayed by the menu item (usually text).')
@Api.slot('addon', 'Custom addon (displayed on the left).')
export class MenuItem extends TsxComponent<Props> {
  @Api.Prop('value (can be used to associate a context with the item)', prop => prop.type(String, Number))
  @Prop({ default: null, required: false, type: [String, Number] })
  public value!: string | number | null;

  @Inject({ from: MENU_LIST, default: null }) public menuList!: MenuList | null;
  @Inject({ from: MENU, default: null }) public menu!: Menu | null;

  get canHaveAddon(): boolean {
    const menu = this.menu;
    if (menu == null) { return false; }
    return menu.canHaveAddon;
  }

  get title(): string | undefined {
    const nodes = this.$slots.default || [];
    if (nodes.length > 0) {
      const text = nodes[0].text;
      return text;
    }
    return undefined;
  }

  public render() {
    const title = this.$slots.default;
    const addon = this.$slots.addon;
    const canHaveAddon = this.canHaveAddon;
    return (
      <li>
        {canHaveAddon && <div class='fd-menu__addon-before'>{addon}</div>}
        <a
          class='fd-menu__item'
          on-click={() => {
            const list = this.menuList;
            if (list) {
              list.menuItemDidClick(this);
            }
            this.$emit('click');
          }}
        >
          {title}
        </a>
      </li>
    );
  }
}
