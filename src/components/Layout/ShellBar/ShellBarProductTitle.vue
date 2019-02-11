<template>
  <span class="fd-shellbar__title">
    <slot />
  </span>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "FdShellBarProductTitle"
});
</script>
