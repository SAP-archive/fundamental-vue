import { Inject } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import { TabItemContainer } from './TabItemContainer';
import { UidMixin } from '@/mixins';
import { ComponentProps, Component, DefaultSlot, Prop } from '@/core';
import { TABS } from './Shared';

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

  @Prop('whether item is disabled', { type: Boolean, default: false })
  public disabled!: boolean;

  @Inject({ from: TABS, default: null })
  public tabs!: TabItemContainer | null;

  public $tsxProps!: ComponentProps<Props>;

  public mounted() {
    const { tabs } = this;
    if (tabs != null) {
      tabs.addTabItem(this);
    }
  }

  public destroyed() {
    const { tabs } = this;
    if (tabs != null) {
      tabs.removeTabItem(this);
    }
  }

  @Inject()
  private store: any;

  private get activeName(): string | null {
    return this.store.activeName;
  }
  private set activeName(newName: string | null) {
    this.store.activeName = newName;
  }

  public get active(): boolean {
    return this.activeName === this.name;
  }

  private onClick(event: Event) {
    event.preventDefault();
    this.tabs != null && this.tabs.activateTabItem(this);
  }

  private onKeyup(event: KeyboardEvent) {
    this.tabs != null && this.tabs.onTabItemKeyup(event, this);
  }

  public renderItem(current: string) {
    const active = current === this.name;
    return (
      <li class='fd-tabs__item'>
        <a
          class='fd-tabs__link'
          aria-controls={this.uid}
          aria-selected={active}
          aria-disabled={this.disabled}
          role='tab'
          on-click={this.onClick}
          tabIndex={0}
          on-keyup={this.onKeyup}
        >
          {this.label}
        </a>
      </li>);
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
