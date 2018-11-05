// tslint:disable-next-line:no-empty-interface
export interface TableData { }
export type SortOrder = 'ascending' | 'descending';
export type SortDescriptor<D extends TableData> = {
  prop: keyof D;
  order: SortOrder;
};
export type CellRenderer<D> = (request: RenderCellRequest<D>) => JSX.Element;
export type ColumnAlignment = 'default' | 'center';
export type TableColumnConfig<D> = {
  columnId: string;
  prop: (keyof D) | null;
  label: string | null;
  sortable: boolean;
  width: number | null;
  renderCell: CellRenderer<D>;
  alignment: ColumnAlignment;
};
export type RenderCellRequest<D> = {
  index: number;
  row: D;
  isSelected: boolean;
};
export const compareValues = <D extends TableData>(key: keyof D, order: SortOrder) => {
  return (a, b): number => {
    if (!(key in a) || !(key in b)) {
      // Property [key] does not exist on a and/or b.
      return 0;
    }
    const varA = a[key];
    const varB = b[key];
    let comparison: number = 0;
    if (typeof varA === 'string' && typeof varB === 'string') {
      comparison = varA.localeCompare(varB);
    } else {
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
    }
    return (order === 'descending') ? (comparison * -1) : comparison;
  };
};
