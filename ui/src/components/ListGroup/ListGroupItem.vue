<template>
  <li class="fd-list-group__item">
    <slot />
    <span v-if="hasAction" class="fd-list-group__action">
      <slot name="action" />
    </span>
  </li>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "FdListGroupItem",
  computed: {
    hasAction(): boolean {
      return this.$slots.action != null;
    }
  }
});
</script>
