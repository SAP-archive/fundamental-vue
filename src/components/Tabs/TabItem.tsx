import { Inject } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import { TabItemContainer } from './TabItemContainer';
import { UidMixin } from '@/mixins';
import { Component, DefaultSlot, Prop } from '@/core';

interface Props {
  label?: string | null;
  name?: string | null;
  disabled?: boolean;
  uid?: string; // Uid mixin
}

@Component('TabItem')
@DefaultSlot('Content to be displayed in the tab body when this item is active.')
export class TabItem extends mixins(UidMixin) {
  @Prop('tab item label', { type: String, default: null })
  public label!: string | null;

  @Prop('name, used to determine whether item is active', { type: String, default: null })
  public name!: string | null;

  @Prop('whether item is disabled', { type: Boolean, default: false})
  public disabled!: boolean;

  @Inject('tabItemContainer')
  public tabItemContainer!: TabItemContainer | null;

  public $tsxProps!: Readonly<{}> & Readonly<Props>;

  public mounted() {
    const { tabItemContainer } = this;
    if (tabItemContainer != null) {
      tabItemContainer.addTabItem(this);
    }
  }

  public destroyed() {
    const { tabItemContainer } = this;
    if (tabItemContainer != null) {
      tabItemContainer.removeTabItem(this);
    }
  }

  public get active(): boolean {
    const { tabItemContainer } = this;
    if (tabItemContainer != null) {
      const { activeName } = tabItemContainer;
      return activeName === this.name;
    }
    return false;
  }

  public render() {
    const expanded = this.active ? 'true' : 'false';
    return (
      <div
        id={this.uid}
        role='tabpanel'
        class='fd-tabs__panel'
        aria-expanded={expanded}
      >
        {this.$slots.default}
      </div>
    );
  }
}
