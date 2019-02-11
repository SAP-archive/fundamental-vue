<template>
  <FdTable :headers="tableHeaders" :items="slots" style="margin-bottom: 0;">
    <template slot="row" slot-scope="{ item }">
      <FdTableRow>
        <FdTableCell>
          <span
            v-if="isDefaultSlot(item.name)"
            style="color: rgb(200, 200, 200);"
          >
            default
          </span>
          <span v-else>{{ item.name }}</span>
        </FdTableCell>
        <FdTableCell>{{ item.description }}</FdTableCell>
      </FdTableRow>
    </template>
  </FdTable>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    isDefaultSlot(name: string) {
      return name === "";
    }
  },
  computed: {
    tableHeaders() {
      return ["Name", "Description"];
    }
  },
  props: {
    slots: Array
  }
});
</script>
