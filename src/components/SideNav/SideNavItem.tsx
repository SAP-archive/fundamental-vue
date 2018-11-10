import {
  Component,
  Inject,
  Prop,
} from 'vue-property-decorator';
import { SideNavList } from './SideNavList';
import { SideNavSubmenu } from './SideNavSubmenu';
import { Api } from '@/api';
import { componentName } from '@/util';
import TsxComponent from '@/vue-tsx';

interface Props {
  isSelected?: boolean;
  hasChild?: boolean;
  isSubitem?: boolean;
  itemId?: string | null;
}

@Component({ name: componentName('SideNavItem') })
@Api.Component('Side Nav Item', comp => {
  comp.addEvent('click', 'Sent when item is clicked');
})
@Api.defaultSlot('Side Nav Items displayed by the list.')
export class SideNavItem extends TsxComponent<Props> {
  @Api.Prop('whether selected', prop => prop.type(Boolean))
  @Prop({ type: Boolean, required: false, default: false })
  public isSelected!: boolean;

  @Api.Prop('whether selected', prop => prop.type(Boolean))
  @Prop({ type: Boolean, required: false, default: false })
  public hasChild!: boolean;

  @Api.Prop('whether selected', prop => prop.type(Boolean))
  @Prop({ type: Boolean, required: false, default: false })
  public isSubitem!: boolean;

  @Api.Prop('unique item identification', prop => prop.type(String))
  @Prop({ type: String, default: null, required: false })
  public itemId!: string | null;

  @Inject({ default: null }) public navList!: SideNavList | null;
  @Inject({ default: null }) private submenu!: SideNavSubmenu | null;

  public render() {
    const title = this.$slots.default;
    const sublist = this.$slots.sublist;

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
        {sublist}
      </li>
    );
  }

  private get classes() {
    return {
      'fd-side-nav__item': !this.isSubitem,
      'fd-side-nav__subitem': this.isSubitem,
    };
  }

  private get isActive() {
    const list = this.navList;
    if (list == null) { return false; }
    const itemId = this.itemId;
    const activeItemId = list.value;// || list.defaultActiveItemId;
    if (itemId == null || activeItemId == null) {
      return false;
    }
    const isActive = itemId === activeItemId;
    return isActive;
  }

  private get ariaSelected() {
    return (this.isSelected || this.isActive) ? 'true' : 'false';
  }

  private get linkClassObject() {
    return {
      'fd-side-nav__link': !this.isSubitem,
      'fd-side-nav__sublink': this.isSubitem,
      'is-selected': this.isSelected,
      'has-child': this.hasChild,
    };
  }

  // Event Handler
  private handleClick() {
    this.$emit('click');
    const list = this.navList;
    if (list != null) {
      list.didClickSideNavItem(this);
    }
    const submenu = this.submenu;

    // Don't inform our submenu if we are a subitem.
    // Otherwise clicking a subitem causes the submenu to toggle.
    const informSubmenu = this.isSubitem === false;
    if (submenu != null && informSubmenu) {
      submenu.didClickSideNavItem(this);
    }
  }
}
