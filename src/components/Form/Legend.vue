<template>
  <legend class="fd-form__legend">
    <slot/>
  </legend>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "FdLegend"
});
</script>

