import { Component } from 'vue-property-decorator';
import { Api } from '@/api';
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
@Api.Component('Side Nav', comp => {
  comp.
    addEvent('select', 'Sent when a item was clicked', event => event.raw('item', 'Item'));
})
@Api.defaultSlot('Side Navigation-Lists/-Items displayed by the Side Navigation.')
export class SideNav extends TsxComponent<{}> {
  public render() {
    const listsOrGroups = this.$slots.default;
    return <nav class='fd-side-nav'>{listsOrGroups}</nav>;
  }

  public didClickSideNavItem(item: SideNavItem) {
    this.$emit('select', item);
  }
}
