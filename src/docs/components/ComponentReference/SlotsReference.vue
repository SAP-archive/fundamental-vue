<template>
  <Table
    :headers="tableHeaders"
    :items="slots"
    style="margin-bottom: 0;">
    <template slot="row" slot-scope="{item}">
      <TableRow>
        <TableCell>
          <span
            v-if="isDefaultSlot(item.name)"
            style="color: rgb(200, 200, 200);">
            default
          </span>
          <span v-else>{{item.name}}</span>
        </TableCell>
        <TableCell>{{item.description}}</TableCell>
      </TableRow>
    </template>
  </Table>
</template>

<script lang="ts">
import Vue from "vue";
import { Table, TableRow, TableCell } from "@/components";

export default Vue.extend({
  components: { TableRow, TableCell, Table },
  methods: {
    isDefaultSlot(name: string) {
      return name === '';
    }
  },
  computed: {
    tableHeaders() { return ['Name', 'Description']; },
  },
  props: {
    slots: Array
  }
});
</script>
