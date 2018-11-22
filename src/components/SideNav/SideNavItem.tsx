import {
  Component,
  Inject,
  Prop,
} from 'vue-property-decorator';
import { SideNavList } from './SideNavList';
import { Api } from '@/api';
import { componentName } from '@/util';
import TsxComponent from '@/vue-tsx';
import { SIDE_NAV, ITEM_LIST, ITEM_CONTAINER, ItemContainer } from './shared';
import { VNode } from 'vue';
import { SideNav } from './SideNav';

interface Props {
  isSelected?: boolean;
  itemId: string;
  submenuTitle?: string;
}

// A SideNavItem can either contain:
// - Text (used as the title)
// - SideNavItems (used to populate a sub side nav)
// If a SideNavItem acts as a submenu use the title prop
// Instead of the default slot for the title.

@Component({
  name: componentName('SideNavItem'),
  provide() {
    return {
      [ITEM_CONTAINER]: this,
    };
  },
})
@Api.Component('Side Nav Item', comp => {
  comp.addEvent('click', 'Sent when item is clicked');
})
@Api.defaultSlot('Side Nav Items displayed by the list.')
export class SideNavItem extends TsxComponent<Props> implements ItemContainer {
  @Api.Prop('whether selected', prop => prop.type(Boolean))
  @Prop({ type: Boolean, required: false, default: false })
  public isSelected!: boolean;

  // @Api.Prop('whether selected', prop => prop.type(Boolean))
  // @Prop({ type: Boolean, required: false, default: false })
  // public hasChild!: boolean;

  @Api.Prop('whether is subitem', prop => prop.type(Boolean))
  @Prop({ type: Boolean, required: false, default: false })
  public isSubitem!: boolean;

  @Api.Prop('unique item identification', prop => prop.type(String))
  @Prop({ type: String, required: true })
  public itemId!: string;

  @Api.Prop('submenu title', prop => prop.type(String))
  @Prop({ type: String, required: false, default: null })
  public submenuTitle!: string | null;

  @Inject({ from: ITEM_LIST, default: null })
  public navList!: SideNavList | null;

  @Inject({ from: SIDE_NAV, default: null })
  public sideNav!: SideNav | null;

  @Inject({ from: ITEM_CONTAINER, default: null })
  private parentItem!: ItemContainer | null;

  // Helper
  private isExpanded = false;

  private get hasChildItems(): boolean {
    return this.childItemIds.length > 0;
  }

  private get isChildItem(): boolean {
    return this.parentItem != null;
  }

  private get title(): string | VNode[] {
    return this.hasChildItems ? (this.submenuTitle || '') : this.$slots.default;
  }

  // ItemContainer-Impls
  private childItemIds: string[] = [];

  public addItem(id: string) {
    this.childItemIds = Array.from(new Set([...this.childItemIds, id]));
  }
  public removeItem(id: string) {
    this.childItemIds = this.childItemIds.filter(childId => childId !== id);
  }

  // Vue-related
  public mounted() {
    const parentItem = this.parentItem;
    if(parentItem != null) {
      parentItem.addItem(this.itemId);
    }
  }

  public beforeDestroy() {
    const parentItem = this.parentItem;
    if(parentItem != null) {
      parentItem.removeItem(this.itemId);
    }
  }

  public render() {
    const title = this.title;
    const renderSubitems = () => {
      return (
        <ul class='fd-side-nav__sublist' aria-hidden={!this.isExpanded}>
          {this.$slots.default}
        </ul>
      );
    };
    return (
      <li class={this.classes}>
        <a
          role='link'
          href='javascript:undefined'
          on-click={this.handleClick}
          aria-selected={this.ariaSelected}
          class={this.linkClassObject}
        >
          {title}
        </a>
        {this.hasChildItems && renderSubitems()}
      </li>
    );
  }

  private get classes() {
    return {
      'fd-side-nav__item': !this.isChildItem,
      'fd-side-nav__subitem': this.isChildItem,
    };
  }

  private get isActive() {
    const list = this.navList;
    if (list == null) { return false; }
    const activeItemId = list.activeItemId;
    if (activeItemId == null) {
      return false;
    }
    const itemId = this.itemId;
    return itemId === activeItemId;
  }

  private get ariaSelected() {
    return (this.isSelected || this.isActive) ? 'true' : 'false';
  }

  private get linkClassObject() {
    return {
      'fd-side-nav__link': !this.isChildItem,
      'fd-side-nav__sublink': this.isChildItem,
      'is-selected': this.isSelected,
      'is-expanded': this.isExpanded,
      'has-child': this.hasChildItems,
    };
  }

  // Event Handler
  private handleClick() {
    this.$emit('click');
    const list = this.navList;
    if (list != null) {
      list.didClickSideNavItem(this);
    }

    if(this.hasChildItems) {
      this.isExpanded = !this.isExpanded;
    }
  }
}
