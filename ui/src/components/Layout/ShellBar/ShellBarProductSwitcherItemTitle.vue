<template>
  <span class="fd-product-switcher__product-title">
    <slot />
  </span>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "FdShellBarProductSwitcherItemTitle"
});
</script>
