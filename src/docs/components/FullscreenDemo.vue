<template>
  <component :is="example.component"/>
</template>

<script lang="ts">
import Vue from "vue";
import { Example } from "@/docs/pages";

export default Vue.extend({
  computed: {
    exampleId(): string {
      return this.$route.params.id;
    },
    example(): Example {
      const { exampleId } = this;
      const result = this.$docLoader.exampleForId(exampleId);
      if (result == null) {
        throw Error(`Unable to get example with id: ${exampleId}`);
      }
      return result;
    }
  }
});
</script>
