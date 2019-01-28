import { Watch, Provide } from 'vue-property-decorator';
import { CreateElement, VNode } from 'vue';
import { ScopedSlotArrayContents, ScopedSlotChildren } from 'vue/types/vnode';
import { TableBody } from './Components/TableBody';
import { TableHeader } from './Components/TableHeader';
import { normalizedHeaders, NormalizedHeader, RawHeader } from './Util';

import {
  SortOrder,
  toggleSortOrder,
  SortBy,
  compareValues,
  SelectionModes,
  SelectionMode,
  SelectionModeValidator,
  withoutDuplicates,
  SortDescriptor,
  Item,
  normalizeItems,
  TableItems,
  RawItem,
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

interface Props {
  headers?: RawHeader[];
  firstColumnFixed?: boolean;
  items?: RawItem[];
  selectionMode?: SelectionMode;
  borderless?: boolean;
  striped?: boolean;
}

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

  @Prop('header configuration', {
    type: Array,
    default: () => [],
    readableDefault: '[]',
  })
  public headers!: RawHeader[];

  @Watch('headers', { immediate: true })
  public columnsChanged(newValue: RawHeader[]) {
    this.normalizedHeaders = normalizedHeaders(newValue, this.firstColumnFixed);
  }
  private normalizedHeaders: NormalizedHeader[] = [];

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
  public items!: RawItem[];

  @Watch('items', { immediate: true })
  public itemsDidChange(newItems: RawItem[]) {
    this.normalizedItems = normalizeItems(newItems);
  }
  private normalizedItems: TableItems = [];

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
  private get sortedByColumnId(): string | null {
    const { sortDescriptor } = this;
    if (sortDescriptor == null) { return null; }
    return sortDescriptor.columnId;
  }
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
    this.sortDescriptor = { columnId, prop: sortBy, order: newOrder };
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
    const copy = [...this.normalizedItems];
    const { sortDescriptor } = this;
    if (sortDescriptor == null) {
      return copy;
    }
    return copy.sort(compareValues(sortDescriptor.prop, sortDescriptor.order));
  }

  public isSelected(id: string) {
    return this.currentSelectedIds.includes(id);
  }

  public get canSelect(): boolean {
    return this.selectionMode !== SelectionMode.none;
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
  ): ScopedSlotArrayContents {
    if (typeof rowNode === 'string') {
      warn(`Unable to prepare table row because rendered slot is not a VNode: ${rowNode}`);
      return [];
    }

    if (Array.isArray(rowNode)) {
      if (rowNode.length === 0) {
        warn(`Unable to prepare table row because rendered slot seems to be an empty array: ${rowNode}`);
        return [];
      }
      const node = rowNode[0] as VNode;
      const { componentOptions } = node;
      if (componentOptions == null) {
        return [];
      }
      const { propsData = {} } = componentOptions;
      const selected = this.isSelected(itemId);
      node.key = itemId;
      componentOptions.propsData = {
        ...propsData,
        itemId,
        isSelected: selected,
      };
      return rowNode;
    }
    return [];
  }

  private renderdRow(
    rowTemplate: ScopedRowSlot,
    item: Item,
  ): ScopedSlotArrayContents {
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

  private get renderedRows(): ScopedSlotArrayContents[] {
    const rowTemplate = this.$scopedSlots.row || (() => undefined);
    return this.sortedData.map(item => this.renderdRow(rowTemplate, item));
  }

  private onColumnClick(columnId: string) {
    const column = this.normalizedHeaders.find(({ id }) => id === columnId);
    if (column == null) {
      return;
    }
    const { sortBy } = column;
    if(sortBy == null) { return; }
    this.sortBy(sortBy, columnId);
  }

  private renderTable(h: CreateElement) {
    const header = (
      <TableHeader
        {... {
          on: {
            'click:column': this.onColumnClick,
          },
        }}
        sortDescriptor={this.sortDescriptor}
        headers={this.normalizedHeaders}
      />
    );
    const body = <TableBody>{this.renderedRows}</TableBody>;
    return h('table', {
      staticClass: 'fd-table',
      class: this.classes,
    }, [header, body]);
  }

  private get classes() {
    return {
      'fd-table--striped': this.striped,
      'fd-table--no-borders': this.borderless,
    };
  }
}
