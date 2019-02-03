<template>
  <div class="fd-spinner" aria-hidden="false" :aria-label="ariaLabel">
    <div/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "FdSpinner",
  props: {
    ariaLabel: { type: String, default: "Loading" }
  }
});
</script>

