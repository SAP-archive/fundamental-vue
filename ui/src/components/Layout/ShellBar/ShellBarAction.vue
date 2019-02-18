<template>
  <div :class="classes"><slot /></div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "FdShellBarAction",
  props: {
    showAlways: { type: Boolean, default: true },
    collapsible: { type: Boolean, default: false }
  },
  computed: {
    classes(): object {
      return {
        "fd-shellbar__action": true,
        "fd-shellbar__action--show-always": this.showAlways,
        "fd-shellbar__action--collapsible": this.collapsible
      };
    }
  }
});
</script>
