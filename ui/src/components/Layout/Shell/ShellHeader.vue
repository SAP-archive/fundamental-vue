<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "FdShellHeader",
  props: {
    fixed: { type: Boolean, default: false }
  },
  computed: {
    classes(): object {
      return ["fd-shell__header"].concat(
        this.fixed ? ["fd-shell__header--fixed"] : []
      );
    }
  }
});
</script>
