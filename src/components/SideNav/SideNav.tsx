import { Component } from 'vue-property-decorator';
import { API } from '@/api';
import { componentName } from '@/util';
import { SideNavItem } from './SideNavItem';
import TsxComponent from '@/vue-tsx';

@Component({
  name: componentName('SideNav'),
  provide() {
    return {
      sideNav: this,
    };
  },
})
@API.Component('Side Nav', comp => {
  comp.
    addEvent('select', 'Sent when a item was clicked', event => event.raw('item', 'Item'));
})
export class SideNav extends TsxComponent<{}> {
  public render() {
    const listsOrGroups = this.$slots.default;
    return <nav class='fd-side-nav'>{listsOrGroups}</nav>;
  }

  public didClickSideNavItem(item: SideNavItem) {
    this.$emit('select', item);
  }
}
