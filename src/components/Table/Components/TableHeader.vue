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

<script>
import TableHeaderCell from "./TableHeaderCell.vue";

export default {
  name: "FdTableHeader",
  components: { TableHeaderCell },
  props: {
    headers: {
      type: Array,
      default: () => []
    },
    sortDescriptor: {
      type: Object,
      default: null
    }
  },
  methods: {
    sortOrder(header) {
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
};
</script>
