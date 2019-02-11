<template>
  <span class="fd-token" role="button" v-on="$listeners">
    <slot />
  </span>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "FdToken"
});
</script>
