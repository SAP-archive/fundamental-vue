<template>
  <component :is="example.component" />
</template>

<script lang="ts">
import Vue from 'vue'
import { exampleCollections, Example } from '@/docs/pages';

export default Vue.extend({
  computed: {
    exampleId(): string {
      return this.$route.params.id;
    },
    example(): Example {
      return exampleCollections.getExample(this.exampleId);
    }
  },
})
</script>
