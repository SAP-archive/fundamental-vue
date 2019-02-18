<template>
  <span class="fd-product-switcher__product-icon">
    <img :src="src" />
  </span>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "FdShellBarProductSwitcherItemImg",
  props: {
    src: { type: String, default: "" }
  }
});
</script>
