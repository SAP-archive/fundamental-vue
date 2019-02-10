<template>
  <div class="fd-shellbar__product">
    <slot/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "FdShellBarProduct"
});
</script>
