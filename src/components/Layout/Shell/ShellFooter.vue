<template>
  <div :class="classes"><slot /></div>
</template>

<script>
export default {
  name: "FdShellFooter",
  props: {
    fixed: { type: Boolean, default: false }
  },
  computed: {
    classes() {
      return ["fd-shell__footer"].concat(this.fixed ? ["fd-shell__footer--fixed"] : []);
    }
  }
};
</script>
