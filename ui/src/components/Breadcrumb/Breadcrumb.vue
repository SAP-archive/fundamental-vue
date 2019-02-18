<template>
  <ul class="fd-breadcrumb">
    <slot />
  </ul>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "FdBreadcrumb"
});
</script>
