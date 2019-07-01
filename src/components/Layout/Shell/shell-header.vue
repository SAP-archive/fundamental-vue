<template>
  <div class="fd-shell__header" :class="classes">
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
      return {
        "fd-shell__header--fixed": this.fixed
      };
    }
  }
};
</script>
