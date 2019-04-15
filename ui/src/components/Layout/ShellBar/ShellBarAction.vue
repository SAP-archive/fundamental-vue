<template>
  <div :class="classes"><slot /></div>
</template>

<script>
export default {
  name: "FdShellBarAction",
  props: {
    showAlways: { type: Boolean, default: true },
    collapsible: { type: Boolean, default: false }
  },
  computed: {
    classes() {
      return {
        "fd-shellbar__action": true,
        "fd-shellbar__action--show-always": this.showAlways,
        "fd-shellbar__action--collapsible": this.collapsible
      };
    }
  }
};
</script>
