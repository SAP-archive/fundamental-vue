import { Watch } from 'vue-property-decorator';
import { TabItemContainer } from './TabItemContainer';
import { TabItem } from './TabItem';
import { Component, Event, DefaultSlot, Prop, Base } from '@/core';

interface Props {
  value?: string | null;
}

@Component('Tabs', {
  provide() {
    return { tabItemContainer: this };
  },
})
@Event('input', 'triggers when the active tab item name changes', ['tabItemName', String])
@DefaultSlot('Tab Items')
export class Tabs extends Base<Props> implements TabItemContainer {
  @Prop('active tab item name', { type: String, default: null })
  public value!: string | null;

  @Watch('value', { immediate: true })
  public handleNewValue(newValue: string | null) {
    this.activeName = newValue;
  }
  private tabItems: TabItem[] = [];

  private keyHandlers(event: any, item: TabItem) {
    if (event) {
      const e = event as KeyboardEvent;
      const key = e.key;
      if (key === 'Enter') {
        this.tabItemClicked(item);
      }
    }
  }

  public render() {
    const tabItems = this.tabItems;
    return (
      <div>
        <ul class='fd-tabs' role='tablist'>
          {tabItems.map(tabItem => (
            <li class='fd-tabs__item'>
              <a
                class='fd-tabs__link'
                aria-controls={tabItem.uid}
                aria-selected={tabItem.active}
                aria-disabled={tabItem.disabled}
                role='tab'
                on-click={() => this.tabItemClicked(tabItem)}
                tabIndex={0}
                on-keydown={()=>this.keyHandlers(event, tabItem)}
              >
                {tabItem.label}
              </a>
            </li>))}
        </ul>
        {this.$slots.default}
      </div>
    );
  }

  private tabItemClicked(item: TabItem) {
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
