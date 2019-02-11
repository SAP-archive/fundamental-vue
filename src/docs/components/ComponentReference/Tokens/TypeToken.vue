<template>
  <span class="type-token">{{ propType }}</span>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    propType: String
  }
});
</script>

<style scoped>
.type-token {
  font-size: 12px;
  padding: 5px;
}
</style>
