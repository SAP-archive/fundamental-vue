import { Watch } from 'vue-property-decorator';
import { SideNavItem } from './SideNavItem';
import { SIDE_NAV } from './shared';
import { Model, Component, Event, DefaultSlot, Base } from '@/core';

interface Props {
  indexPath?: string | null;
}

@Component('SideNav', {
  provide() {
    return {
      [SIDE_NAV]: this,
    };
  },
})
@Event('select', 'Sent when a item was clicked', ['item', 'SideNavItem'])
@DefaultSlot('Side Navigation-Lists/-Items displayed by the Side Navigation.')
export class SideNav extends Base<Props> {
  @Model('default index path', { event: 'change', type: String, default: null })
  public indexPath!: string | null;

  public activeIndexPath: string | null = this.indexPath;

  @Watch('indexPath', { immediate: true})
  public handleNewIndexPath(newIndexPath: string | null) {
    this.activeIndexPath = newIndexPath;
  }

  public render() {
    const itemsOrLists = this.$slots.default;
    return <nav class='fd-side-nav'>{itemsOrLists}</nav>;
  }

  public didClickSideNavItem(item: SideNavItem) {
    this.activeIndexPath = item.itemId;
    this.$emit('select', item);
    this.$emit('change', this.activeIndexPath);
  }
}
