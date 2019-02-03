<template>
  <form>
    <slot/>
  </form>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "FdForm"
});
</script>
