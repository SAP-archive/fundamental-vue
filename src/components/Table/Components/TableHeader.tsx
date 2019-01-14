import { DefaultSlot, Component, Base } from '@/core';
import { Inject } from 'vue-property-decorator';
import { VNode } from 'vue';
import { Table, TABLE_KEY } from './../Table';
import { SortOrder } from './../Util/SortOrder';

@Component('TableHeader')
@DefaultSlot('Table Header Cells to be rendered')
export class TableHeader extends Base {
  @Inject({
    from: TABLE_KEY,
    default: null,
  })
  public table!: Table | null;

  private get firstColumnFixed(): boolean {
    return (this.table || false) && this.table.firstColumnFixed;
  }

  private sortOrder(columnId: string): SortOrder | null {
    return (this.table != null && this.table.sortOrder(columnId)) || null;
  }

  private preparedHeaderCellNode(node: VNode, columnIndex: number): VNode {
    const { componentOptions } = node;
    if(componentOptions == null) {
      return node;
    }
    const { propsData = {} } = componentOptions;

    // A column can only be fixed if it is the first + firstColumnFixed is true.
    const fixed = columnIndex === 0 && this.firstColumnFixed;
    const sortOrder = this.sortOrder;
    componentOptions.propsData = {
      fixed,
      sortOrder,
      ...propsData,
    };
    return node;
  }

  private get preparedHeaderCellNodes(): VNode[] {
    return (this.$slots.default || []).map(this.preparedHeaderCellNode);
  }

  public render() {
    return <thead><tr>{this.preparedHeaderCellNodes}</tr></thead>;
  }
}
