<script lang="ts">
import Vue, { VNode, CreateElement } from "vue";
import { PropValidator } from "vue/types/options";
import { normalizedHeaders, NormalizedHeader, RawHeader } from "./Util";
import { warn } from '@/core';

import { ScopedSlotArrayContents, ScopedSlotChildren } from 'vue/types/vnode';
import TableBody from './Components/TableBody.vue';
import TableHeader from './Components/TableHeader.vue';
import {
  SortOrder,
  toggleSortOrder,
  SortBy,
  compareValues,
  SelectionMode,
  SelectionModeValidator,
  withoutDuplicates,
  SortDescriptor,
  Item,
  normalizeItems,
  TableItems,
  RawItem
} from "./Util";

const enum SelectAction {
  deselect = "deselect",
  select = "select"
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


export default Vue.extend({
  name: "FdTable",
  components: {TableBody, TableHeader},
  provide(): object {
    return {
      table: this
    };
  },
  watch: {
    headers: {
      immediate: true,
      handler(newValue: RawHeader[]) {
        this.normalizedHeaders = normalizedHeaders(newValue, this.firstColumnFixed);
      },
    },
    items: {
      immediate: true,
      handler(newItems: RawItem[]) {
        this.normalizedItems = normalizeItems(newItems);
      }
    },
    selectionMode: {
      immediate: true,
      handler(newSelectionMode: SelectionMode) {
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
          default:
            break;
        }
      }
    }
  },
  props: {
    headers: {
      type: Array,
      default: () => [],
      readableDefault: "[]"
    } as PropValidator<RawHeader[]>,
    firstColumnFixed: {
      type: Boolean,
      default: false
    } as PropValidator<boolean>,
    fixedWrapperStyle: {
      type: Object,
      default: () => ({ width: "700px" })
    } as PropValidator<object>,
    borderless: { type: Boolean, default: false },
    striped: {
      type: Boolean,
      default: false
    } as PropValidator<boolean>,
    items: {
      type: Array,
      default: () => []
    } as PropValidator<object[]>,
    selectedIds: {
      type: Array,
      default: () => []
    } as PropValidator<string[]>,
    selectionMode: {
      validator: SelectionModeValidator,
      type: String,
      default: SelectionMode.none,
    } as PropValidator<SelectionMode>,
  },
  computed: {
    classes(): object {
      return {
        'fd-table--striped': this.striped,
        'fd-table--no-borders': this.borderless,
      };
    },
    renderedRows(): ScopedSlotArrayContents[] {
      const rowTemplate = this.$scopedSlots.row || (() => undefined);
      return this.sortedData.map(item => this.renderdRow(rowTemplate, item));
    },
    canSelect(): boolean {
      return this.selectionMode !== SelectionMode.none;
    },
    sortedData(): TableItems {
      const copy = [...this.normalizedItems];
      const { sortDescriptor } = this;
      if (sortDescriptor == null) {
        return copy;
      }
      return copy.sort(compareValues(sortDescriptor.prop, sortDescriptor.order));
    },
    sortedByColumnId(): string | null {
      const { sortDescriptor } = this;
      if (sortDescriptor == null) {
        return null;
      }
      return sortDescriptor.columnId;
    },
  },
  methods: {
    renderTable(h: CreateElement): VNode {
      const header =
        h(TableHeader, {
          on: {
            'click:column': this.onColumnClick,
          },
          props: {
            sortDescriptor: this.sortDescriptor,
            headers: this.normalizedHeaders,
          }
        }, []);
      const renderedRows = this.renderedRows;
      const body = h(TableBody, {}, renderedRows);
      return h('table', {
        staticClass: 'fd-table',
        class: this.classes,
      }, [header, body]);
    },
    onColumnClick(columnId: string): void {
    const column = this.normalizedHeaders.find(({ id }) => id === columnId);
    if (column == null) {
      return;
    }
    const { sortBy } = column;
    if(sortBy == null) { return; }
    this.sortBy(sortBy, columnId);
  },
    execute(action: SelectAction, id: string): void {
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
  },
  toggleSelectionForItem(id: string): void {
    const isSelected = this.currentSelectedIds.includes(id);
    if (isSelected) {
      this.execute(SelectAction.deselect, id);
    } else {
      this.execute(SelectAction.select, id);
    }
  },
  preparedRenderedRow(
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
  },
  renderdRow(
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
  },
    isSelected(id: string): boolean {
    return this.currentSelectedIds.includes(id);
  },
    sortOrder(columnId: string): SortOrder | null {
      if (this.sortedByColumnId !== columnId) {
        return null;
      }
      const { sortDescriptor } = this;
      if (sortDescriptor == null) {
        return null;
      }
      return sortDescriptor.order;
    },
  sortBy(sortBy: SortBy, columnId: string): void {
      const needsToggle = this.sortedByColumnId === columnId;
      const { order = SortOrder.ascending } = this.sortDescriptor || {};
      const newOrder = needsToggle ? toggleSortOrder(order) : order;
      this.sortDescriptor = { columnId, prop: sortBy, order: newOrder };
    },

    // Emit the passed ids in order to support .sync
    updateSelectedIds(newIds: string[] | string): void {
      const ids = withoutDuplicates(
        Array.isArray(newIds) ? [...newIds] : [newIds]
      );
      this.currentSelectedIds = ids;
      this.$emit("update:selectedIds", ids);
    }
  },
  data() {
    return {
      normalizedItems: [] as TableItems,
      sortDescriptor: null as SortDescriptor | null,
      currentSelectedIds: this.selectedIds as string[],
      normalizedHeaders: [] as NormalizedHeader[],
    };
  },
  render(h: CreateElement): VNode {
    if (this.firstColumnFixed) {
      return h('div', {
          class: 'fd-table--fixed-wrapper',
          style: this.fixedWrapperStyle,
        },
        [
          h('div', {
            class: 'fd-table--fixed',
            style: {
              'margin-left': '200px',
              'padding-left': '0px',
            },
          }, [this.renderTable(h)])
        ]);
    }
      // );

      //   <div staticClass='fd-table--fixed-wrapper' style={this.fixedWrapperStyle}>
      //     <div
      //       staticClass='fd-table--fixed'
      //       style={{
      //         'margin-left': '200px',
      //         'padding-left': '0px',
      //       }}
      //     >
      //       {this.renderTable(h)}
      //     </div>
      //   </div>
      // );
    // }
    // debugger;
    return this.renderTable(h);
  }
});
</script>

