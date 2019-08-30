<template>
  <table class="fd-table" :class="classes">
    <fd-table-header
      :sortDescriptor="sortDescriptor"
      :headers="normalizedHeaders"
      @click:column="onColumnClick"
    />
    <fd-table-body>
      <template v-for="item in normalizedItems">
        <fd-table-item-provider
          :key="keyForItem(item)"
          :selected="isSelected(item.id)"
          :item="item"
        >
          <slot
            name="row"
            :setSelected="$_rowPropsSetSelected(item)"
            :toggle="$_rowPropsToggle(item)"
            :item="item"
            :selectedIds="computedSelectedIds"
            :selected="isSelected(item.id)"
            :canSelect="canSelect"
          >
            <fd-table-row></fd-table-row>
          </slot>
        </fd-table-item-provider>
      </template>
    </fd-table-body>
  </table>
</template>
<script>
import normalizedHeaders from "./utils/normalized-headers";
import { SortOrder, toggleSortOrder } from "./utils/sort-order";
import compareValues from "./utils/compare-values";
import normalizedItems from "./utils/normalized-items";
import { SelectionMode, SelectionModeValidator } from "./utils/selection-mode";
import withoutDuplicates from "./../../util/without-duplicates";
import FdTableBody from "./Components/TableBody.vue";
import FdTableHeader from "./Components/TableHeader.vue";
import FdTableItemProvider from "./Components/item-provider.vue";
import FdTableRow from "./Components/TableRow.vue";

const SELECT_ACTION = {
  deselect: "deselect",
  select: "select"
};

// A table component used to display tabluar data.
export default {
  name: "FdTable",
  components: {
    FdTableRow,
    FdTableBody,
    FdTableHeader,
    FdTableItemProvider
  },
  provide() {
    return {
      table: this
    };
  },
  watch: {
    computedSelectedIds: {
      immediate: true,
      handler(computedSelectedIds) {
        this.$emit("update:selectedIds", computedSelectedIds);
      }
    }
  },
  props: {
    // Headers of the table
    headers: {
      // Either an array with plain strings. For each string in the headers-array you have to provide a scoped-slot of the same name. You can also pass in header objects instead of strings to customize the headers. Refer to the table guide for more details.
      type: Array,
      // `[]` (empty array)
      default: () => []
    },
    firstColumnFixed: {
      type: Boolean,
      default: false
    },
    // If `true` no border is drawn around the table.
    borderless: {
      type: Boolean,
      default: false
    },
    // If `true` tables are drawn with an alternating background color.
    striped: {
      type: Boolean,
      default: false
    },
    // Items to be displayed in the table.
    items: {
      type: Array,
      // `[]` (empty array)
      default: () => []
    },
    // Ids of selected items.
    selectedIds: {
      type: Array,
      // `[]` (empty array)
      default: () => []
    },
    // Selection mode
    selectionMode: {
      // - `none`: no selection possible
      // - `single`: single row can be selected
      // - `multiple`: multiple rows can be selected
      type: String,
      validator: SelectionModeValidator,
      // `none` – selecting rows is not possible by default
      default: SelectionMode.none
    }
  },
  computed: {
    computedSelectedIds() {
      const { selectionMode, selectedIds_ } = this;
      switch (selectionMode) {
        case SelectionMode.single: {
          const isInvalid = selectedIds_.length > 1;
          if (isInvalid) {
            return selectedIds_[0];
          }
          return withoutDuplicates(selectedIds_);
        }
        case SelectionMode.none: {
          return [];
        }
        default: {
          return withoutDuplicates(selectedIds_);
        }
      }
    },
    normalizedItems() {
      const { items, sortDescriptor } = this;
      const result = [...normalizedItems(items)];
      if (sortDescriptor == null) {
        return result;
      }
      return result.sort(compareValues(sortDescriptor.prop, sortDescriptor.order));
    },
    normalizedHeaders() {
      return normalizedHeaders(this.headers, this.firstColumnFixed);
    },
    classes() {
      return {
        "fd-table--striped": this.striped,
        "fd-table--no-borders": this.borderless
      };
    },
    canSelect() {
      return this.selectionMode !== SelectionMode.none;
    },
    sortedByColumnId() {
      const { sortDescriptor } = this;
      if (sortDescriptor == null) {
        return null;
      }
      return sortDescriptor.columnId;
    }
  },
  methods: {
    keyForItem(item) {
      return item.id;
    },
    onColumnClick(columnId) {
      const column = this.normalizedHeaders.find(({ id }) => id === columnId);
      if (column == null) {
        return;
      }
      const { sortBy } = column;
      if (sortBy == null) {
        return;
      }
      this.sortBy(sortBy, columnId);
    },
    execute(action, id) {
      switch (this.selectionMode) {
        case SelectionMode.none: {
          this.selectedIds_ = [];
          break;
        }
        case SelectionMode.multiple: {
          if (action === SELECT_ACTION.select) {
            this.selectedIds_ = [id, ...this.selectedIds_];
          } else {
            const newIds = [...this.selectedIds_].filter(selectedId => selectedId !== id);
            this.selectedIds_ = newIds;
          }
          break;
        }
        case SelectionMode.single: {
          this.selectedIds_ = action === SELECT_ACTION.deselect ? [] : [id];
          break;
        }
      }
    },
    $_rowPropsToggle(item) {
      return () => this.toggleSelectionForItem(item);
    },
    $_rowPropsSetSelected(item) {
      return selected => {
        if (selected) {
          this.execute(SELECT_ACTION.select, item.id);
        } else {
          this.execute(SELECT_ACTION.deselect, item.id);
        }
      };
    },
    toggleSelectionForItem(item) {
      this.toggleSelectionForItemWithId(item.id);
    },
    toggleSelectionForItemWithId(id) {
      const isSelected = this.selectedIds_.indexOf(id) >= 0;
      if (isSelected) {
        this.execute(SELECT_ACTION.deselect, id);
      } else {
        this.execute(SELECT_ACTION.select, id);
      }
    },
    isSelected(id) {
      return this.computedSelectedIds.indexOf(id) >= 0;
    },
    sortOrder(columnId) {
      if (this.sortedByColumnId !== columnId) {
        return null;
      }
      const { sortDescriptor } = this;
      if (sortDescriptor == null) {
        return null;
      }
      return sortDescriptor.order;
    },
    sortBy(sortBy, columnId) {
      const needsToggle = this.sortedByColumnId === columnId;
      const { order = SortOrder.ascending } = this.sortDescriptor || {};
      const newOrder = needsToggle ? toggleSortOrder(order) : order;
      this.sortDescriptor = { columnId, prop: sortBy, order: newOrder };
    }
  },
  data() {
    return {
      sortDescriptor: null,
      selectedIds_: this.selectedIds
    };
  }
};
</script>
