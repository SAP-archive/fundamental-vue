<template>
  <td :class="classes" :style="style">
    <slot />
  </td>
</template>

<script>
export default {
  name: "FdTableCell",
  props: {
    fixed: {
      type: Boolean,
      default: null
    }
  },
  computed: {
    style() {
      return this.fixed ? { left: "0", width: "200px" } : {};
    },
    classes() {
      if (!this.fixed) {
        return null;
      }
      return {
        "fd-table__fixed-col": this.fixed
      };
    }
  }
};
</script>
