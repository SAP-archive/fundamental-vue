import { Prop, Component, Base } from '@/core';
import {
  SortBy,
  TextAlignment,
  TextAlignments,
  SortOrder,
} from './../Util';

interface Props {
  label?: string | null;
  alignment?: TextAlignment;
  sortable?: boolean;
  sortBy?: SortBy | null;
  sortOrder: SortOrder | null;
  columnFixed?: boolean | null;
}

@Component('TableHeaderCell')
export class TableHeaderCell extends Base<Props> {
  @Prop('header label', {
    type: String,
    default: null,
  })
  public label!: string | null;

  @Prop('text alignment', {
    type: String,
    default: TextAlignment.default,
    validator: TextAlignments.includes,
    acceptableValues: TextAlignments,
  })
  public alignment!: TextAlignment;

  @Prop('sort order', {
    type: String,
    default: null,
  })
  public sortOrder!: SortOrder;

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
  public columnFixed!: boolean | null;

  private get styles() {
    return this.columnFixed ? {
      left: 0,
      width: '200px',
    } : {};
  }

  private get classes() {
    const sortOrder = this.sortOrder;
    return {
      'fd-has-text-align-center': this.alignment === TextAlignment.center,
      'fd-table__sort-column': this.sortable,
      'fd-table__sort-column--dsc': sortOrder === SortOrder.descending,
      'fd-table__sort-column--asc': sortOrder === SortOrder.ascending,
      'fd-table__fixed-col': this.columnFixed,
    };
  }

  public render() {
    const on = this.$listeners;
    return (
      <th
        {...{ on }}
        class={this.classes}
        style={this.styles}
      >
        {this.label}
        {this.$slots.default}
      </th>
    );
  }
}
