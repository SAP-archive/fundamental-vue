import {
  Component,
  Vue,
} from 'vue-property-decorator';
import { API } from '@/api';
import { componentName } from '@/util';
import { SideNavItem } from './side-nav-item';

@Component({
  name: componentName('side-nav'),
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
export class SideNav extends Vue {
  public render() {
    const listsOrGroups = this.$slots.default;
    return <nav class='fd-side-nav'>{listsOrGroups}</nav>;
  }

  public didClickSideNavItem(item: SideNavItem) {
    this.$emit('select', item);
  }
}
