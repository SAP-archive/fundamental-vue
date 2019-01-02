import {
  Vue,
  Watch,
} from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { TableColumn } from './TableColumn';
import { SortOrder, TableData, compareValues, TableColumnConfig, RenderCellRequest } from './TableUtils';
import { Component, Event, DefaultSlot, Prop, Base } from '@/core';
import { ColumnContainer, ColumnContainerIdentifier } from './ColumnContainer';

interface Props<D> {
  firstColumnFixed?: boolean;
  data?: D[];
  selectionMode?: SelectionMode | null;
}

type Row<D> = RenderCellRequest<D>;

const toggleOrder = (order: SortOrder): SortOrder => {
  return order === 'ascending' ? 'descending' : 'ascending';
};

const selectionModeMapping = {
  single: 'Single Selection',
  multiple: 'Multiple Selection',
};
export type SelectionMode = keyof (typeof selectionModeMapping);
const SelectionModes = Object.keys(selectionModeMapping) as SelectionMode[];

type SortDescriptor<D extends TableData> = {
  prop: keyof D;
  order: SortOrder;
};
type Selection = number[];

@Component('Table', {
  provide() {
    return {
      [ColumnContainerIdentifier]: this,
    };
  },
})
@Event('select', 'Sent when the selection changes', ['rows', 'Array<number>'])
@DefaultSlot('Table Columns')
export class Table<D extends TableData> extends Base<Props<D>> implements ColumnContainer<D> {
  @Prop('whether the column is fixed (experimental)', { type: Boolean, default: false })
  public firstColumnFixed!: boolean;

  @Prop('displayed data', { type: Array, default: () => [], readableDefault: 'object[]' })
  public data!: D[];

  @Prop('selection mode', { acceptableValues: SelectionModes, type: String, default: null })
  public selectionMode!: SelectionMode | null;

  public sortDescriptor: SortDescriptor<D> | null = null;
  private columns: Array<TableColumnConfig<D>> = [];
  private selection: Selection = [];

  @Watch('selectionMode', { immediate: true, deep: true })
  public makeCurrentSelectionValid() {
    switch (this.selectionMode) {
      case null: {
        this.selection = [];
        break;
      }
      case 'multiple': {
        // Nothing todo
        break;
      }
      case 'single': {
        if (this.selection.length === 0) {
          break;
        }
        const smallestIndex = Math.min(...this.selection);
        this.selection = [smallestIndex];
        break;
      }
    }
  }

  @Watch('columns', { immediate: true, deep: true })
  public onColumnsChanged(newColumns) {
    this.$forceUpdate();
  }

  private get sortedData(): D[] {
    const { sortDescriptor } = this;
    const data = this.data;
    if (sortDescriptor == null) {
      return data;
    }
    const copy = [...data];
    const { prop, order } = sortDescriptor;
    copy.sort(compareValues<D>(prop, order));
    return copy;
  }

  public didClickRowAtIndex(index: number) {
    if (this.selectionMode == null) {
      return;
    }
    Vue.set(this.selection, 0, index);
    this.$emit('select', this.selection);
  }

  public didClickInHeaderOfColumn(tableColumn: TableColumn<D>) {
    if (tableColumn.sortable === false) {
      return;
    }
    const { prop } = tableColumn;
    if (prop == null) {
      console.warn('Tried to sort a table but clicked table column has no prop.');
      return;
    }
    const current = this.sortDescriptor;
    if (current == null) {
      this.sortDescriptor = {
        prop,
        order: 'ascending',
      };
    } else {
      const { order } = current;
      const needsToggleOrder = tableColumn.prop === prop;
      const newOrder = needsToggleOrder ? toggleOrder(order) : 'ascending';
      this.sortDescriptor = {
        prop,
        order: newOrder,
      };
    }
  }

  public insertTableColumn(column: TableColumnConfig<D>, index?: number) {
    const newColumns = [...this.columns];
    if (index == null) {
      newColumns.push(column);
    } else {
      newColumns.splice(index, 0, column);
    }
    this.columns = newColumns;
  }

  public removeTableColumn(columnId: string) {
    const index = this.columns.findIndex(column => {
      return columnId === column.columnId;
    });
    if (index < 0) {
      console.warn('Tried to remove table column with id %s but its parent table did not contain a table column that matched.', columnId);
      return;
    }
    const newColumns = [...this.columns];
    newColumns.splice(index, 1);
    this.columns = newColumns;
  }

  public isColumnFixed(columnId: string): boolean {
    // Only the first column can be fixed. So we get the first column and compare it's id.
    const [first = null] = this.columns;
    if (first == null) { return false; }
    return first.columnId === columnId && this.firstColumnFixed;
  }

  public isPreceededByFixedColumn(columnId: string): boolean {
    const [first = null, second = null] = this.columns;
    if (second == null || first == null) { return false; }
    return second.columnId === columnId && this.isColumnFixed(first.columnId);
  }

  public get fixedColumnWidth(): number {
    if (this.firstColumnFixed === false) { return 0; }
    const [first = null] = this.columns;
    if (first == null) { return 0; }
    return first.width || 200;
  }

  public render(h: CreateElement) {
    const tableColumns = this.columns;
    const renderColumn = (columnConfig: TableColumnConfig<D>, row: Row<D>) => {
      const isFixed = this.isColumnFixed(columnConfig.columnId);
      const cellClasses = {
        'fd-table__fixed-col': isFixed,
      };

      const makeCellStyle = () => {
        const style = columnConfig.alignment === 'center' ? { 'text-align': 'center' } : {};
        const left = this.isPreceededByFixedColumn(columnConfig.columnId) ? `${this.fixedColumnWidth}px` : '0';
        if (isFixed) {
          return {
            ...style,
            left,
            width: `${columnConfig.width}px`,
          };
        } else {
          return {
            ...style,
            left,
          };
        }
      };

      const cellStyle = makeCellStyle();
      return (
        <td class={cellClasses} style={cellStyle}>
          {columnConfig.renderCell(row)}
        </td>
      );
    };
    const renderRow = (row: Row<D>) => {
      const key = `row-${row.index}`;
      return (
        <tr
          key={key}
          aria-selected={row.isSelected}
          on-click={() => this.didClickRowAtIndex(row.index)}
        >
          {tableColumns.map(column => renderColumn(column, row))}
        </tr>
      );
    };

    const renderTable = () => {
      return (
        <table class={this.classes}>
          <thead>
            <tr>
              {this.$slots.default}
            </tr>
          </thead>
          <tbody>
            {this.sortedData.map((rowData, index) => {
              const isSelected = this.rowAtIndexIsSelected(index);
              const row: Row<D> = {
                index,
                isSelected,
                row: rowData,
              };
              return renderRow(row);
            })}
          </tbody>
        </table>
      );
    };

    const [firstColumn = { width: 200 }] = this.columns;
    const fixedColumnWidth = firstColumn.width;
    if (this.firstColumnFixed) {
      const fixedStyle = {
        'margin-left': `${fixedColumnWidth}px !important`,
        'padding-left': 0,
      };
      return (
        <div class='fd-table--fixed-wrapper'>
          <div class='fd-table--fixed' style={fixedStyle}>
            {renderTable()}
          </div >
        </div >
      );
    }
    return renderTable();
  }

  private get classes() {
    return {
      'fd-table': true,
    };
  }

  private rowAtIndexIsSelected(index: number): boolean {
    return this.selection.includes(index);
  }
}
