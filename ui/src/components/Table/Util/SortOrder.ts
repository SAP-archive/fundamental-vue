export enum SortOrder {
  ascending = "ascending",
  descending = "descending"
}
export const toggleSortOrder = (order: SortOrder): SortOrder =>
  order === SortOrder.ascending ? SortOrder.descending : SortOrder.ascending;

export const SortOrders = Object.keys(SortOrder);
