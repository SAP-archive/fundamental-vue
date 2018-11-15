import { Component, Prop, Watch } from 'vue-property-decorator';
import { Api } from '@/api';
import { componentName } from '@/util';
import { SideNavItem } from './SideNavItem';
import TsxComponent from '@/vue-tsx';
import { SIDE_NAV } from './shared';

interface Props {
  defaultItemId?: string | null;
}

@Component({
  name: componentName('SideNav'),
  provide() {
    return {
      [SIDE_NAV]: this,
    };
  },
})
@Api.Component('Side Nav', comp => {
  comp.
    addEvent('select', 'Sent when a item was clicked', event => event.raw('item', 'Item'));
})
@Api.defaultSlot('Side Navigation-Lists/-Items displayed by the Side Navigation.')
export class SideNav extends TsxComponent<Props> {
  @Watch('defaultItemId', { immediate: true })
  public handleNewDefaultItemId(newDefaultItemId: string | null) {
    this.activeItemId = newDefaultItemId;
  }

  @Api.Prop('default item id', prop => prop.type(String))
  @Prop({ type: String, default: null, required: false })
  public defaultItemId!: string | null;
  public activeItemId: string | null = this.defaultItemId;

  public render() {
    const listsOrGroups = this.$slots.default;
    return <nav class='fd-side-nav'>{listsOrGroups}</nav>;
  }

  public didClickSideNavItem(item: SideNavItem) {
    this.$emit('select', item);
    this.activeItemId = item.itemId;
  }
}
