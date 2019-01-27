<template>
  <Table
    :items="events"
    :headers="headers"
  >
    <template slot="row" scope="{item}">
      <TableRow>
        <TableCell>{{item.name}}</TableCell>
        <TableCell>{{item.description}}</TableCell>
      </TableRow>
    </template>
  </Table>
</template>

<script lang="ts">
import Vue from 'vue'
import { EventDocumentation } from '@/api';
import { Prop } from "vue/types/options";
import { Table, TableRow, TableCell } from "@/components";

export default Vue.extend({
  components: { Table, TableRow, TableCell },
  props: {
    events: Array as Prop<EventDocumentation[]>,
  },
  computed: {
    headers() {
      return ['Event', 'Description'];
    }
  },
})
</script>
