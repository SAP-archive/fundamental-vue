<template>
  <div :class="classes"><slot /></div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "FdShellFooter",
  props: {
    fixed: { type: Boolean, default: false }
  },
  computed: {
    classes(): string[] {
      return ["fd-shell__footer"].concat(
        this.fixed ? ["fd-shell__footer--fixed"] : []
      );
    }
  }
});
</script>
