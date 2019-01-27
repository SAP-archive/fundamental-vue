<template>
<component :is="layout" />
</template>

<script lang="ts">
import Vue from 'vue'

const DEFAULT_LAYOUT = 'Default';

export default Vue.extend({
  computed: {
    layout(): string {
      return (this.$route.meta.layout || DEFAULT_LAYOUT) + 'Layout';
    },
  },
})
</script>
