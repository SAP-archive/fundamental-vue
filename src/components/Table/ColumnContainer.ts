import {
  SortDescriptor,
  TableColumnConfig,
} from './TableUtils';
import { TableColumn } from './TableColumn';

export const ColumnContainerIdentifier = Symbol();
export interface ColumnContainer<D> {
  // Table related Propierties
  sortDescriptor: SortDescriptor<D> | null;

  // Event Propagation
  didClickInHeaderOfColumn(column: TableColumn<D>): void;

  // Table Column Management
  isColumnFixed(columnId: string): boolean;
  isPreceededByFixedColumn(columnId: string): boolean;
  readonly fixedColumnWidth: number;

  removeTableColumn(columnId: string): void;
  insertTableColumn(config: TableColumnConfig<D>): void;
}
