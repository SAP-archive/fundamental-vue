<script>
import { normalizedHeaders } from "./Util";
import { warn } from "./../../core";
import { withoutDuplicates } from "./../../util";
import TableBody from "./Components/TableBody.vue";
import TableHeader from "./Components/TableHeader.vue";
import {
  SortOrder,
  toggleSortOrder,
  compareValues,
  SelectionMode,
  SelectionModeValidator,
  normalizeItems
} from "./Util";

const SelectAction = {
  deselect: "deselect",
  select: "select"
};

export default {
  name: "FdTable",
  components: { TableBody, TableHeader },
  provide() {
    return {
      table: this
    };
  },
  watch: {
    headers: {
      immediate: true,
      handler(newValue) {
        this.normalizedHeaders = normalizedHeaders(
          newValue,
          this.firstColumnFixed
        );
      }
    },
    items: {
      immediate: true,
      handler(newItems) {
        this.normalizedItems = normalizeItems(newItems);
      }
    },
    selectionMode: {
      immediate: true,
      handler(newSelectionMode) {
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
    },
    firstColumnFixed: {
      type: Boolean,
      default: false
    },
    fixedWrapperStyle: {
      type: Object,
      default: () => ({ width: "700px" })
    },
    borderless: { type: Boolean, default: false },
    striped: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      default: () => []
    },
    selectedIds: {
      type: Array,
      default: () => []
    },
    selectionMode: {
      validator: SelectionModeValidator,
      type: String,
      default: SelectionMode.none
    }
  },
  computed: {
    classes() {
      return {
        "fd-table--striped": this.striped,
        "fd-table--no-borders": this.borderless
      };
    },
    renderedRows() {
      const rowTemplate = this.$scopedSlots.row || (() => undefined);
      return this.sortedData.map(item => this.renderdRow(rowTemplate, item));
    },
    canSelect() {
      return this.selectionMode !== SelectionMode.none;
    },
    sortedData() {
      const copy = [...this.normalizedItems];
      const { sortDescriptor } = this;
      if (sortDescriptor == null) {
        return copy;
      }
      return copy.sort(
        compareValues(sortDescriptor.prop, sortDescriptor.order)
      );
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
    renderTable(h) {
      const header = h(
        TableHeader,
        {
          on: {
            "click:column": this.onColumnClick
          },
          props: {
            sortDescriptor: this.sortDescriptor,
            headers: this.normalizedHeaders
          }
        },
        []
      );
      const renderedRows = this.renderedRows;
      const body = h(TableBody, {}, renderedRows);
      return h(
        "table",
        {
          staticClass: "fd-table",
          class: this.classes
        },
        [header, body]
      );
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
          this.updateSelectedIds([]);
          break;
        }
        case SelectionMode.multiple: {
          if (action === SelectAction.select) {
            this.updateSelectedIds([id, ...this.currentSelectedIds]);
          } else {
            const newIds = [...this.currentSelectedIds].filter(
              selectedId => selectedId !== id
            );
            this.updateSelectedIds(newIds);
          }
          break;
        }
        case SelectionMode.single: {
          this.updateSelectedIds(action === SelectAction.deselect ? [] : [id]);
          break;
        }
      }
    },
    toggleSelectionForItem(id) {
      const isSelected = this.currentSelectedIds.indexOf(id) >= 0;
      if (isSelected) {
        this.execute(SelectAction.deselect, id);
      } else {
        this.execute(SelectAction.select, id);
      }
    },
    preparedRenderedRow(rowNode, { id: itemId }) {
      if (typeof rowNode === "string") {
        warn(
          `Unable to prepare table row because rendered slot is not a VNode: ${rowNode}`
        );
        return [];
      }

      if (Array.isArray(rowNode)) {
        if (rowNode.length === 0) {
          warn(
            `Unable to prepare table row because rendered slot seems to be an empty array: ${rowNode}`
          );
          return [];
        }
        const node = rowNode[0];
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
          isSelected: selected
        };
        return rowNode;
      }
      return [];
    },
    renderdRow(rowTemplate, item) {
      const changeSelection = (selected, event) => {
        event.stopImmediatePropagation();
        event.preventDefault();
        this.execute(
          selected ? SelectAction.select : SelectAction.deselect,
          item.id
        );
      };

      const renderedRow = rowTemplate({
        item,
        changeSelection,
        selected: this.isSelected(item.id)
      });

      return this.preparedRenderedRow(renderedRow, item);
    },
    isSelected(id) {
      return this.currentSelectedIds.indexOf(id) >= 0;
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
    },

    // Emit the passed ids in order to support .sync
    updateSelectedIds(newIds) {
      const ids = withoutDuplicates(
        Array.isArray(newIds) ? [...newIds] : [newIds]
      );
      this.currentSelectedIds = ids;
      this.$emit("update:selectedIds", ids);
    }
  },
  data() {
    return {
      normalizedItems: [],
      sortDescriptor: null,
      currentSelectedIds: this.selectedIds,
      normalizedHeaders: []
    };
  },
  render(h) {
    if (this.firstColumnFixed) {
      return h(
        "div",
        {
          class: "fd-table--fixed-wrapper",
          style: this.fixedWrapperStyle
        },
        [
          h(
            "div",
            {
              class: "fd-table--fixed",
              style: {
                "margin-left": "200px",
                "padding-left": "0px"
              }
            },
            [this.renderTable(h)]
          )
        ]
      );
    }
    return this.renderTable(h);
  }
};
</script>
