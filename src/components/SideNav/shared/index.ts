export const ITEM_CONTAINER = Symbol();
export const SIDE_NAV = Symbol();

export interface ItemContainer {
  addItem(id: string): void;
  removeItem(id: string): void;
}
