import { Component, Prop, Inject } from 'vue-property-decorator';
import { MenuList } from './MenuList';
import { Menu } from './Menu';
import { componentName } from '@/util';
import { API } from '@/api';
import { MENU, MENU_LIST } from './types';
import TsxComponent from '@/vue-tsx';

interface Props {
  value?: string | number | null;
}

@Component({ name: componentName('MenuItem') })
@API.Component('Menu Item', comp => comp.addEvent('click', 'Sent when item was clicked'))
export class MenuItem extends TsxComponent<Props> {
  @API.Prop('value (can be used to associate a context with the item)', prop => prop.type(String, Number))
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
    const nodes = this.$slots.default;
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
