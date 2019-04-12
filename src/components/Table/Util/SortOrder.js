export const SortOrder = {
  ascending: "ascending",
  descending: "descending"
};
export const toggleSortOrder = order =>
  order === SortOrder.ascending ? SortOrder.descending : SortOrder.ascending;
export const SortOrders = Object.keys(SortOrder);
