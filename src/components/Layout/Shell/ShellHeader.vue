<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  name: "FdShellHeader",
  props: {
    fixed: { type: Boolean, default: false }
  },
  computed: {
    classes() {
      return ["fd-shell__header"].concat(this.fixed ? ["fd-shell__header--fixed"] : []);
    }
  }
};
</script>
