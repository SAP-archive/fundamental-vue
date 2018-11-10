import {
  Component,
  Prop,
  Watch,
} from 'vue-property-decorator';
import { Api } from '@/api';
import { componentName } from '@/util';
import { TabItemContainer } from './TabItemContainer';
import { TabItem } from './TabItem';
import TsxComponent from '@/vue-tsx';

interface Props {
  value?: string | null;
}

@Component({
  provide() {
    return { tabItemContainer: this };
  },
  name: componentName('Tabs'),
})
@Api.Component('Tabs', comp => {
  comp.addEvent('input', 'triggers when the active tab item name changes', event => {
    event.string('tabItemName');
  });
})
@Api.defaultSlot('Tab Items')
export class Tabs extends TsxComponent<Props> implements TabItemContainer {
  @Api.Prop('active tab item name', prop => prop.type(String))
  @Prop({ type: String, default: null, required: false })
  public value!: string | null;

  @Watch('value', { immediate: true })
  public handleNewValue(newValue) {
    this.activeName = newValue;
  }
  private tabItems: TabItem[] = [];

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
    const index = this.$slots.default.indexOf(item.$vnode);
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
