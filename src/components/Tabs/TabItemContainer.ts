import { TabItem } from './TabItem';

export interface TabItemContainer {
  addTabItem(item: TabItem): void;
  removeTabItem(item: TabItem): void;
  activateTabItem(item: TabItem): void;
  onTabItemKeyup(event: KeyboardEvent, item: TabItem): void;
  readonly value: string | null;
}
