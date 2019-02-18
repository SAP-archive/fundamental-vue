<template>
  <td :class="classes" :style="style">
    <slot />
  </td>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "FdTableCell",
  props: {
    fixed: {
      type: Boolean,
      default: null
    }
  },
  computed: {
    style(): object {
      return this.fixed ? { left: "0", width: "200px" } : {};
    },
    classes(): object | null {
      if (!this.fixed) {
        return null;
      }
      return {
        "fd-table__fixed-col": this.fixed
      };
    }
  }
});
</script>
