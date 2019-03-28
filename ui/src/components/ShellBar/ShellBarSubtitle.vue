<template>
  <span class="fd-shellbar__subtitle">
    <slot />
  </span>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "FdShellBarSubtitle"
});
</script>
