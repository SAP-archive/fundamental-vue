<template>
  <div class="fd-shellbar__product">
    <FdShellBarProductTitle v-if="productTitle != null">{{
      productTitle
    }}</FdShellBarProductTitle>
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FdShellBarProductTitle from "./ShellBarProductTitle.vue";

export default Vue.extend({
  name: "FdShellBarProduct",
  components: { FdShellBarProductTitle },
  props: {
    productTitle: { type: String, default: null }
  }
});
</script>
