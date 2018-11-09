import { TabItem } from './TabItem';

export interface TabItemContainer {
  addTabItem(item: TabItem): void;
  removeTabItem(item: TabItem): void;
  readonly activeName: string | null;
}
