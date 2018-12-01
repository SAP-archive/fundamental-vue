import {
  Component,
  Watch,
  Model,
} from 'vue-property-decorator';
import { Api } from '@/api';
import { componentName } from '@/util';
import { SideNavItem } from './SideNavItem';
import TsxComponent from '@/vue-tsx';
import { SIDE_NAV } from './shared';

interface Props {
  indexPath?: string | null;
}

@Component({
  name: componentName('SideNav'),
  provide() {
    return {
      [SIDE_NAV]: this,
    };
  },
})
@Api.Component('Side Nav')
@Api.Event('select', 'Sent when a item was clicked', ['item', 'SideNavItem'])
@Api.defaultSlot('Side Navigation-Lists/-Items displayed by the Side Navigation.')
export class SideNav extends TsxComponent<Props> {
  @Model('change', { type: String, default: null })
  @Api.Prop('default index path', prop => prop.type(String))
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
