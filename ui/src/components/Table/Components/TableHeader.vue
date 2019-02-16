<template>
  <thead>
    <tr>
      <TableHeaderCell
        v-for="header in headers"
        :key="header.id"
        :label="header.label"
        :sortable="header.sortable"
        :sortBy="header.sortBy"
        :sortOrder="sortOrder(header)"
        :columnFixed="header.columnFixed"
        @click="$emit('click:column', header.id)"
      />
    </tr>
  </thead>
</template>

<script lang="ts">
import Vue from "vue";
import { NormalizedHeader, SortDescriptor, SortOrder } from "./../Util";
import { PropValidator } from "vue/types/options";
import TableHeaderCell from "./TableHeaderCell.vue";

export default Vue.extend({
  name: "FdTableHeader",
  components: { TableHeaderCell },
  props: {
    headers: {
      type: Array,
      default: () => []
    } as PropValidator<NormalizedHeader[]>,
    sortDescriptor: {
      type: Object,
      default: null
    } as PropValidator<SortDescriptor | null>
  },
  methods: {
    sortOrder(header: NormalizedHeader): SortOrder | null {
      const sortDescriptor = this.sortDescriptor;
      const sortedColumnId = sortDescriptor && sortDescriptor.columnId;
      if (sortedColumnId == null) {
        return null;
      }
      if (header.id !== sortedColumnId) {
        return null;
      }
      return sortDescriptor && sortDescriptor.order;
    }
  }
});
</script>
