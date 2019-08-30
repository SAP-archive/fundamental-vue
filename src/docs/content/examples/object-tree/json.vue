<template>
  <fd-object-tree :json="json"></fd-object-tree>
</template>

<script>
export default {
  data() {
    return {
      object: {
        status: {
          success: false,
          message: "some string data"
        },
        page: 1,
        pageSize: 4,
        functionProperty: function() {},
        nullProperty: null,
        totalRecords: 1000,
        records: [
          {
            name: "Record name",
            type: 5
          },
          2,
          "string"
        ]
      }
    };
  },
  computed: {
    json() {
      return JSON.stringify(this.object);
    }
  }
};
</script>
