import { Prop, Component, Base } from '@/core';
import { Inject } from 'vue-property-decorator';
import { Table, TABLE_KEY } from './../Table';
import { CreateElement } from 'vue';

@Component('TableRow')
export class TableRow extends Base<{}> {
  @Inject({
    from: TABLE_KEY,
    default: null,
  })
  public table!: Table| null;

  @Prop('item id', {
    type: String,
    default: null,
  })
  public itemId!: string | null;

  // We can't name this prop 'selected' because it will clash
  // with the selected prop of the scoped slot...
  @Prop('whether the row is selected', {
    type: Boolean,
    default: false,
  })
  public isSelected!: boolean;

  private get firstColumnFixed(): boolean {
    return (this.table || false) && this.table.firstColumnFixed;
  }

  private handleClick(event: Event) {
    const { itemId, table } = this;
    if(itemId == null || table == null) { return false; }
    table.toggleSelectionForItem(itemId);
  }

  public render(h: CreateElement) {
    const cells = this.$slots.default || [];
    cells.forEach((cell, index) => {
      const options = cell.componentOptions;
      if(options == null) {
        return;
      }
      const fixed = index === 0 && this.firstColumnFixed;
      const { propsData = {} } = options;
      options.propsData = { ...propsData, fixed };
    });
    return h('tr', {
      on: { click: this.handleClick },
      attrs: { 'aria-selected': this.isSelected },
    }, cells);
  }
}
