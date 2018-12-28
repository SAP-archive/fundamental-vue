import { IconMixin, IconProps } from '@/mixins';
import { ComponentProps, Component, Base } from '@/core';
import { mixins } from 'vue-class-component';

export * from './SideNav';
export * from './SideNavList';

export { SideNavItem } from './SideNavItem';
export { SideNavSubItem } from './SideNavSubItem';
export { SideNavLink } from './SideNavLink';
export { SideNavSubLink } from './SideNavSubLink';
export { SideNavSubList } from './SideNavSubList';
export { Item as SideNavListItem } from './Model';

@Component('SideNavGroup')
export class SideNavGroup extends Base {
  public render() {
    return <div class='d-side-nav__group'>{this.$slots.default}</div>;
  }
}

@Component('SideNavGroupTitle')
export class SideNavGroupTitle extends Base {
  public render() {
    return <h1 class='fd-side-nav__title'>{this.$slots.default}</h1>;
  }
}

@Component('SideNavIcon')
export class SideNavIcon extends mixins(IconMixin) {
  public $tsxProps!: ComponentProps<IconProps>;
  public render() {
    return (
      <span
        class={`fd-side-nav__icon ${this.iconClassName} sap-icon--m`}
        role='presentation'
      />
    );
  }
}

