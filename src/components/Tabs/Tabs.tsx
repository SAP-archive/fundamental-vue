import { Provide } from 'vue-property-decorator';
import { TabItemContainer } from './TabItemContainer';
import { TabItem } from './TabItem';
import { Component, Event, DefaultSlot, Prop, Base } from '@/core';
import { TABS } from './Shared';

interface Props {
  value?: string | null;
}

@Component('Tabs')
@Event('input',
  'triggers when the active tab item name changes',
  ['tabItemName', String],
)
@DefaultSlot('Tab Items')
export class Tabs extends Base<Props> implements TabItemContainer {
  @Provide(TABS)
  public tabs: TabItemContainer = this;

  @Prop('active tab item name', {
    type: String,
    default: null,
  })
  public value!: string | null;

  private tabItems: TabItem[] = [];

  public onTabItemKeyup(event: KeyboardEvent, item: TabItem) {
    if(event.defaultPrevented) {
      return;
    }

    // key is not supported everywhere (edge) this we check both values.
    const key = event.key || event.keyCode;
    const isEnter = key === 'Enter' || key === /* enter */ 13;
    if(isEnter) {
      this.activateTabItem(item);
      event.preventDefault();
    }
  }

  public render() {
    const tabItems = this.tabItems;
    return (
      <div>
        <ul class='fd-tabs' role='tablist'>
          {tabItems.map(tabItem => {
            return tabItem.renderItem(this.activeName || '');
          })}
        </ul>
        {this.$slots.default}
      </div>
    );
  }

  public activateTabItem(item: TabItem) {
    // Ignore disabled items
    if (item.disabled) {
      return;
    }
    this.activeName = item.name;
    this.$emit('input', item.name);
  }

  // TabItemContainer Implementation
  public activeName: string | null = this.value || null;

  public addTabItem(item: TabItem) {
    const index = (this.$slots.default || []).indexOf(item.$vnode);
    this.tabItems.splice(index, 0, item);
  }

  public removeTabItem(item: TabItem) {
    const tabItems = this.tabItems;
    const index = tabItems.indexOf(item);
    if (index > -1) {
      tabItems.splice(index, 1);
    }
  }
}
