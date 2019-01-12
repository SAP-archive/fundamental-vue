import { Watch, Provide } from 'vue-property-decorator';
import { CreateElement, VNode } from 'vue';
import { ScopedSlotChildren } from 'vue/types/vnode';
import { TableBody } from './Components/TableBody';
import {
  SortOrder,
  toggleSortOrder,
  SortBy,
  compareValues,
  SelectionModes,
  SelectionMode,
  SelectionModeValidator,
  withoutDuplicates,
} from './Util';
import {
  Component,
  Event,
  DefaultSlot,
  Prop,
  Base,
  warn,
} from '@/core';

export const TABLE_KEY = Symbol();

type TableItems = Array<Item & object>;
interface Item { id: string; }

interface Props {
  firstColumnFixed?: boolean;
  items?: TableItems;
  selectionMode?: SelectionMode;
  borderless?: boolean;
  striped?: boolean;
}

type SortDescriptor = {
  prop: string;
  order: SortOrder;
} & object;

// Props passed to the row template. See ScopedRowSlot below.
interface RowSlotProps<T = object> {
  item: T & Item;
  selected: boolean;
  changeSelection(selected: boolean, event: Event): void;
}

// Typed version of Vue's ScopedSlot type.
// This will be called row each row our table component has to render.
export type ScopedRowSlot<T = object> = (props: RowSlotProps<T>) => ScopedSlotChildren;

const enum SelectAction {
  deselect = 'deselect',
  select = 'select',
}

@Component('Table')
@Event('update:selectedIds', 'Sent when the selection changes', ['ids', 'string[]'])
@DefaultSlot('Table Columns')
export class Table extends Base<Props> {
  @Provide(TABLE_KEY)
  public table = this;

  @Prop('whether the column is fixed (experimental)', {
    type: Boolean,
    default: false,
  })
  public firstColumnFixed!: boolean;

  @Prop('CSS style for the fixed wrapper (experimental)', {
    type: Object,
    default: () => ({ width: '700px' }),
  })
  public fixedWrapperStyle!: object;

  @Prop('whether no borders are drawn', {
    type: Boolean,
    default: false,
  })
  public borderless!: boolean;

  @Prop('whether table has alternating row colors', {
    type: Boolean,
    default: false,
  })
  public striped!: boolean;

  @Prop('displayed items', {
    type: Array,
    default: () => [],
    readableDefault: 'object[]',
  })
  public items!: TableItems;

  @Prop('selected ids', {
    type: Array,
    default: () => [],
    readableDefault: 'string[]',
  })
  public selectedIds!: string[];

  @Prop('selection mode', {
    validator: SelectionModeValidator,
    acceptableValues: SelectionModes,
    type: String,
    default: SelectionMode.none,
  })
  public selectionMode!: SelectionMode;

  public sortDescriptor: SortDescriptor | null = null;
  private sortedByColumnId: string | null = null;
  private currentSelectedIds: string[] = this.selectedIds;

  public sortOrder(columnId: string): SortOrder | null {
    if (this.sortedByColumnId !== columnId) {
      return null;
    }
    const { sortDescriptor } = this;
    if (sortDescriptor == null) {
      return null;
    }
    return sortDescriptor.order;
  }

  public sortBy(sortBy: SortBy, columnId: string) {
    const needsToggle = this.sortedByColumnId === columnId;
    const { order = SortOrder.ascending } = this.sortDescriptor || {};
    const newOrder = needsToggle ? toggleSortOrder(order) : order;
    this.sortDescriptor = { prop: sortBy, order: newOrder };
    this.sortedByColumnId = columnId;
  }

  // Emit the passed ids in order to support .sync
  private updateSelectedIds(newIds: string[] | string) {
    const ids = withoutDuplicates(Array.isArray(newIds) ? [...newIds] : [newIds]);
    this.currentSelectedIds = ids;
    this.$emit('update:selectedIds', ids);
  }

  @Watch('selectionMode', { immediate: true })
  public onSelectionModeChange(newSelectionMode: SelectionMode) {
    // Make the current selection valid.
    switch (newSelectionMode) {
      case SelectionMode.single: {
        const isInvalid = this.currentSelectedIds.length > 1;
        if (isInvalid) {
          this.updateSelectedIds(this.currentSelectedIds[0]);
        }
        break;
      }
      case SelectionMode.none: {
        this.updateSelectedIds([]);
        break;
      }
      default: break;
    }
  }

  private get sortedData(): TableItems {
    const copy = [...this.items];
    const { sortDescriptor } = this;
    if (sortDescriptor == null) {
      return copy;
    }
    return copy.sort(compareValues(sortDescriptor.prop, sortDescriptor.order));
  }

  public isSelected(id: string) {
    return this.currentSelectedIds.includes(id);
  }

  public render(h: CreateElement) {
    if (this.firstColumnFixed) {
      return (
        <div staticClass='fd-table--fixed-wrapper' style={this.fixedWrapperStyle}>
          <div
            staticClass='fd-table--fixed'
            style={{
              'margin-left': '200px',
              'padding-left': '0px',
            }}
          >
            {this.renderTable(h)}
          </div>
        </div>
      );
    }
    return this.renderTable(h);
  }

  private execute(action: SelectAction, id: string) {
    switch (this.selectionMode) {
      case SelectionMode.none: {
        this.updateSelectedIds([]);
        break;
      }
      case SelectionMode.multiple: {
        if (action === SelectAction.select) {
          this.updateSelectedIds([id, ...this.currentSelectedIds]);
        } else {
          const newIds = [...this.currentSelectedIds].filter(selectedId => selectedId !== id);
          this.updateSelectedIds(newIds);
        }
        break;
      }
      case SelectionMode.single: {
        this.updateSelectedIds((action === SelectAction.deselect) ? [] : [id]);
        break;
      }
    }
  }

  public toggleSelectionForItem(id: string) {
    const isSelected = this.currentSelectedIds.includes(id);
    if (isSelected) {
      this.execute(SelectAction.deselect, id);
    } else {
      this.execute(SelectAction.select, id);
    }
  }

  private preparedRenderedRow(
    rowNode: ScopedSlotChildren,
    { id: itemId }: Item,
  ): VNode | null {
    if (typeof rowNode !== 'object' || Array.isArray(rowNode)) {
      warn(`Unable to prepare table row because rendered slot is not a VNode: ${rowNode}`);
      return null;
    }
    const { componentOptions } = rowNode;
    if (componentOptions == null) {
      return null;
    }
    const { propsData = {} } = componentOptions;
    const selected = this.isSelected(itemId);
    rowNode.key = itemId;
    componentOptions.propsData = {
      ...propsData,
      itemId,
      isSelected: selected,
    };
    return rowNode;
  }

  private renderdRow(
    rowTemplate: ScopedRowSlot,
    item: Item,
  ): VNode | null {
    const changeSelection = (selected: boolean, event: Event) => {
      event.stopImmediatePropagation();
      event.preventDefault();
      this.execute(selected ? SelectAction.select : SelectAction.deselect, item.id);
    };

    const renderedRow = rowTemplate({
      item,
      changeSelection,
      selected: this.isSelected(item.id),
    });

    return this.preparedRenderedRow(renderedRow, item);
  }

  private get renderedRows(): VNode[] {
    const isVNode = (node: VNode | null): node is VNode => node != null;
    const rowTemplate = this.$scopedSlots.row || (() => undefined);
    return this.sortedData.map(item => this.renderdRow(rowTemplate, item)).filter(isVNode);
  }

  private renderTable(h: CreateElement) {
    const renderedRows = [...this.renderedRows];
    const body = <TableBody>{renderedRows}</TableBody>;
    return h('table', { staticClass: 'fd-table', class: this.classes }, [this.$slots.default || [], body]);
  }

  private get classes() {
    return {
      'fd-table--striped': this.striped,
      'fd-table--no-borders': this.borderless,
    };
  }
}
