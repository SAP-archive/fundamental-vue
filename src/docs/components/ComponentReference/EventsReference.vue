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

<script>
export default {
  props: {
    events: Array
  },
  computed: {
    headers() {
      return ["Event", "Description"];
    }
  }
};
</script>
