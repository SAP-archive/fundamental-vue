<template>
  <component :is="example.component" />
</template>

<script>
export default {
  computed: {
    exampleId() {
      return this.$route.params.id;
    },
    example() {
      const { exampleId } = this;
      const result = this.$docLoader.exampleForId(exampleId);
      if (result == null) {
        throw Error(`Unable to get example with id: ${exampleId}`);
      }
      return result;
    }
  }
};
</script>
