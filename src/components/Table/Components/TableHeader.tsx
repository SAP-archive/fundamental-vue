import { Prop, Component, Base } from '@/core';
import { CreateElement } from 'vue';
import { NormalizedHeader, SortDescriptor } from './../Util';
import { TableHeaderCell } from './TableHeaderCell';

interface Props {
  headers: NormalizedHeader[];
  sortDescriptor: SortDescriptor | null;
}
@Component('TableHeader')
export class TableHeader extends Base<Props> {
  @Prop({
    type: Array,
    default: () => [],
  })
  public headers!: NormalizedHeader[];

  @Prop({
    type: Object,
    default: null,
  })
  public sortDescriptor!: SortDescriptor | null;

  public render(h: CreateElement) {
    const sortDescriptor = this.sortDescriptor;
    const sortedColumnId = sortDescriptor && sortDescriptor.columnId;
    const headerCells = this.headers.map(header => {
      const sortOrder_ = () => {
        if(sortedColumnId == null) { return null; }
        if(header.id !== sortedColumnId) { return null; }
        return sortDescriptor && sortDescriptor.order;
      };
      const { columnFixed, label, sortable, sortBy } = header;
      const sortOrder = sortOrder_();
      return (
        <TableHeaderCell
          on-click={()=>this.$emit('click:column', header.id)}
          label={label}
          sortable={sortable}
          sortBy={sortBy}
          sortOrder={sortOrder}
          columnFixed={columnFixed}
        />
      );
    });

    return (
      <thead>
        <tr>
          {headerCells}
        </tr>
      </thead>
    );
  }
}
