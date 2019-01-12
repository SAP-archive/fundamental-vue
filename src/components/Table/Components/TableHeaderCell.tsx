import { SortBy } from './../Util';
import { Prop, Component, Base } from '@/core';
import { Inject } from 'vue-property-decorator';
import { Table, TABLE_KEY } from './../Table';
import { shortUuid } from '@/lib/uuid';
import { SortOrder } from './../Util/SortOrder';

type SortOrderGetter = (columnId: string) => SortOrder | null;

interface TableHeaderCellProps {
  label?: string | null;
  alignment?: Alignment;
  sortable?: boolean;
  sortBy?: SortBy | null;
  sortOrder?: SortOrderGetter;
}

enum Alignment {
  default = 'default',
  center = 'center',
}
const Alignments = Object.values(Alignment);

@Component('TableHeaderCell')
export class TableHeaderCell extends Base<TableHeaderCellProps> {
  @Inject(TABLE_KEY)
  public table!: Table | null;
  public columnId = shortUuid();

  @Prop('header label', {
    type: String,
    default: null,
  })
  public label!: string | null;

  @Prop('text alignment', {
    type: String,
    default: Alignment.default,
    validator: Alignments.includes,
    acceptableValues: Alignments,
  })
  public alignment!: Alignment;

  @Prop('sort order', {
    type: Function,
    default: () => null,
  })
  public sortOrder!: SortOrderGetter;

  @Prop('whether the column is sortable', {
    type: Boolean,
    default: false,
  })
  public sortable!: boolean;

  @Prop('prop used when sorting', {
    type: String,
    default: null,
  })
  public sortBy!: SortBy | null;

  @Prop('whether the column is fixed', {
    type: Boolean,
    default: null,
  })
  public fixed!: boolean | null;

  private get styles() {
    return this.fixed ? { left: 0, width: '200px' } : {};
  }

  private get classes() {
    const sortOrder = this.sortOrder(this.columnId);
    return {
      'fd-has-text-align-center': this.alignment === Alignment.center,
      'fd-table__sort-column': this.sortable,
      'fd-table__sort-column--dsc': sortOrder === SortOrder.descending,
      'fd-table__sort-column--asc': sortOrder === SortOrder.ascending,
      'fd-table__fixed-col': this.fixed,
    };
  }

  private onTableHeaderClick() {
    const { sortBy, table } = this;
    if(table == null) {
      return;
    }
    if(!this.sortable || sortBy == null) { return; }
    table.sortBy(sortBy, this.columnId);
  }

  public render() {
    return (
      <th
        class={this.classes}
        style={this.styles}
        on-click={this.onTableHeaderClick}
      >
        {this.label}
        {this.$slots.default}
      </th>
    );
  }
}
