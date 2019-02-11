<template>
  <FdTable :items="events" :headers="headers">
    <template slot="row" slot-scope="{ item }">
      <FdTableRow>
        <FdTableCell>{{ item.name }}</FdTableCell>
        <FdTableCell>{{ item.description }}</FdTableCell>
      </FdTableRow>
    </template>
  </FdTable>
</template>

<script lang="ts">
import Vue from "vue";
import { EventDocumentation } from "@/docs/api";
import { Prop } from "vue/types/options";

export default Vue.extend({
  props: {
    events: Array as Prop<EventDocumentation[]>
  },
  computed: {
    headers(): string[] {
      return ["Event", "Description"];
    }
  }
});
</script>
