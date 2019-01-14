import { Inject } from 'vue-property-decorator';
import { MenuList } from './MenuList';
import { Menu } from './Menu';
import { MENU, MENU_LIST } from './types';
import { Slot, Component, Event, DefaultSlot, Prop, Base } from '@/core';
import { VNode } from 'vue';

const isAnchorNode = ({ tag }: VNode) => tag === 'a';
const findAnchor = (nodes: VNode[]): VNode | undefined => {
  for(const node of nodes) {
    if(isAnchorNode(node)) {
      return node;
    }
    const anchorInChildren = findAnchor(node.children || []);
    if(anchorInChildren !== undefined) {
      return anchorInChildren;
    }
  }
};

interface Props {
  value?: string | number | null;
}

@Component('MenuItem')
@Event('click', 'Sent when the itme was clicked')
@DefaultSlot('Content displayed by the menu item (usually text).')
@Slot('addon', 'Custom addon (displayed on the left).')
export class MenuItem extends Base<Props> {
  @Prop('value (can be used to associate a context with the item)', { default: null, type: [String, Number] })
  public value!: string | number | null;

  @Inject({ from: MENU_LIST, default: null })
  public menuList!: MenuList | null;

  @Inject({ from: MENU, default: null })
  public menu!: Menu | null;

  get canHaveAddon(): boolean {
    const menu = this.menu;
    return menu == null ? false : menu.canHaveAddon;
  }

  private get customAnchor(): VNode | undefined {
    return findAnchor(this.$slots.default || []);
  }

  private onClick() {
    const list = this.menuList;
    if(list != null) {
      list.menuItemDidClick(this);
    }
    this.$emit('click');
  }

  private prepareCustomAnchor(anchor: VNode) {
    const data = anchor.data || {};
    const classes = data.class || {};
    data.class = {...classes, [this.anchorClass]: true};
    const handler = this.onClick;
    const on = { click: handler, ...(data.on || {}) };
    data.on = on;
    anchor.data = data;
  }

  private get hasCustomAnchor() {
    return this.customAnchor !== undefined;
  }

  private readonly anchorClass = 'fd-menu__item';

  public render() {
    const addon = this.$slots.addon;
    const canHaveAddon = this.canHaveAddon;
    const customAnchor = this.customAnchor;
    if(customAnchor !== undefined) { this.prepareCustomAnchor(customAnchor); }
    return (
      <li>
        {canHaveAddon && <div class='fd-menu__addon-before'>{addon}</div>}
        {this.hasCustomAnchor ? this.$slots.default :
          <a href='#' staticClass={this.anchorClass} on-click={this.onClick}>
            {this.$slots.default}
          </a>
        }
      </li>
    );
  }
}
