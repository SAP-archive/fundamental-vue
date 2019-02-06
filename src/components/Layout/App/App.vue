<template>
  <div class="fd-shell__app">
    <slot name="header"/>
    <div class="fd-app">
      <slot/>
    </div>
    <slot name="footer"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "FdApp"
});
</script>
