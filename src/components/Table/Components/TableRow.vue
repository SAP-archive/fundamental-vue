<template>
  <tr :aria-selected="String(selected_)" v-on="$listeners">
    <template v-for="header in normalizedHeaders">
      <fd-table-cell-fixed-provider :fixed="header.columnFixed" :key="header.id">
        <slot :name="header.slotName">
          <fd-table-cell>{{ fdTableItemProvider.item[header.key] }}</fd-table-cell>
        </slot>
      </fd-table-cell-fixed-provider>
    </template>
  </tr>
</template>

<script>
import FdTableCell from "./TableCell.vue";
import FdTableCellFixedProvider from "./fixed-provider.vue";
export default {
  name: "FdTableRow",
  components: { FdTableCellFixedProvider, FdTableCell },
  inject: {
    fdTableItemProvider: {
      default: {
        item: {},
        selected: null
      }
    },
    table: { default: null }
  },
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    selected_() {
      const { selected, fdTableItemProvider } = this;
      return fdTableItemProvider.selected != null ? fdTableItemProvider.selected : selected;
    },
    normalizedHeaders() {
      return this.table.normalizedHeaders;
    }
  }
};
</script>
