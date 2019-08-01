<template>
  <fd-object-tree root-name="API Response" :ignore-properties="['exculded']" :object="object" />
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
        nullProperty: null,
        totalRecords: 1000,
        exculded: "i will not be rendered",
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
  }
};
</script>
