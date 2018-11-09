import {
  Component,
  Inject,
  Prop,
  Vue,
} from 'vue-property-decorator';
import { SideNavList } from './side-nav-list';
import { SideNavSubmenu } from './side-nav-submenu';

import { API } from '@/api';
import { componentName } from '@/util';

@Component({ name: componentName('side-nav-item') })
@API.Component('Side Nav Item', comp => {
  comp.addEvent('click', 'Sent when item is clicked');
})
export class SideNavItem extends Vue {
  @Prop({ type: Boolean, required: false, default: false })
  @API.Prop('whether selected', prop => prop.type(Boolean))
  public isSelected!: boolean;

  @Prop({ type: Boolean, required: false, default: false })
  @API.Prop('whether selected', prop => prop.type(Boolean))
  public hasChild!: boolean;

  @Prop({ type: Boolean, required: false, default: false })
  @API.Prop('whether selected', prop => prop.type(Boolean))
  public isSubitem!: boolean;

  @Prop({ type: String, default: null, required: false })
  @API.Prop('unique item identification', prop => prop.type(String))
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
      </li>)
      ;
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
