import { Inject } from 'vue-property-decorator';
import {
  SortOrder,
  TableColumnConfig,
  ColumnAlignment,
  CellRenderer,
} from './TableUtils';
import { shortUuid } from '@/lib/uuid';
import { ColumnContainer, ColumnContainerIdentifier } from './ColumnContainer';
import { warn, Component, DefaultSlot, Prop, Base } from '@/core';

interface Props<D> {
  label?: string | null;
  alignment?: ColumnAlignment;
  prop?: (keyof D) | null;
  sortable?: boolean;
  width?: number | null;
}

@Component('TableColumn')
@DefaultSlot('Custom Table Cell.')
export class TableColumn<D> extends Base<Props<D>> {
  @Prop('header label', { type: String, default: null })
  public label!: string | null;

  @Prop({ type: String, default: 'default' })
  public alignment!: ColumnAlignment;

  @Prop('field name (key must be present in the data array objects)', { type: String, default: null })
  public prop!: (keyof D) | null;

  @Prop('whether the column is sortable', { type: Boolean, default: false })
  public sortable!: boolean;

  @Prop('column width - must be set then isFixed is true (experimental)', { type: Number, default: null })
  public width!: number | null;

  @Inject(ColumnContainerIdentifier) public table!: ColumnContainer<D> | null;

  public columnId = shortUuid();

  public render() {
    return <th on-click={this.didClick} class={this.classes} style={this.styles} >{this.label}</th>;
  }

  get sortOrder(): SortOrder | null {
    const table = this.table;
    if (table != null) {
      const { sortDescriptor } = table;
      if (sortDescriptor == null) {
        return null;
      }
      if (sortDescriptor.prop !== this.prop) {
        return null;
      }
      return sortDescriptor.order;
    }
    return null;
  }

  private get styles() {
    const container = this.table;
    if (container == null) {
      return {};
    }

    const isFixed = this.isFixed;
    const style = this.alignment === 'center' ? { 'text-align': 'center' } : {};
    if (isFixed) {
      return { ...style, left: 0, width: `${this.width || 200}px` };
    } else {
      const left = this.isPreceededByFixedColumn ? `${container.fixedColumnWidth}px` : 'auto';
      return { ...style, left };
    }
  }

  private get classes() {
    const order = this.sortOrder;
    return {
      'fd-table__sort-column': this.sortable,
      'fd-table__sort-column--dsc': order === 'descending',
      'fd-table__sort-column--asc': order === 'ascending',
      'fd-table__fixed-col': this.isFixed,
    };
  }

  private get isFixed(): boolean {
    const container = this.table;
    if (container == null) { return false; }
    return container.isColumnFixed(this.columnId);
  }

  private get isPreceededByFixedColumn(): boolean {
    const container = this.table;
    if (container == null) { return false; }
    return container.isPreceededByFixedColumn(this.columnId);
  }

  public didClick() {
    const table = this.table;
    if (table != null) {
      table.didClickInHeaderOfColumn(this);
    }
  }

  public created() {
    const table = this.table;
    if (table != null) {
      const columnId = this.columnId;
      const prop = this.prop;
      const label = this.label;
      // tslint:disable-next-line:variable-name
      const _this = this;
      const renderCell: CellRenderer<D> = request => {
        if (prop == null) {
          const cellSlot = _this.$scopedSlots.default;
          if(cellSlot == null) {
            warn('Unable to render table cell because \'prop\' not set.');
            return;
          }
          const renderedCell = cellSlot(request);
          return renderedCell;
        }
        const value = request.row[prop];
        // _v is a vue-internal api used to create raw text nodes.
        // @ts-ignore
        return _this._v(value);
      };
      const sortable = this.sortable;
      const width = this.width;
      const alignment = this.alignment;
      const config: TableColumnConfig<D> = {
        sortable,
        width,
        columnId,
        renderCell,
        prop,
        label,
        alignment,
      };
      table.insertTableColumn(config);
    }
  }

  public destroyed() {
    const table = this.table;
    if (table != null) {
      table.removeTableColumn(this.columnId);
    }
  }
}
