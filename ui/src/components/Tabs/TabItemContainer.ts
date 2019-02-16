// FIXME: Add types back
export interface TabItemContainer {
  addTabItem(item: any): void;
  removeTabItem(item: any): void;
  activateTabItem(item: any): void;
  onTabItemKeyup(event: KeyboardEvent, item: any): void;
  readonly value: string | null;
}
