<template>
  <div class="fd-shell__footer" :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  name: "FdShellFooter",
  props: {
    fixed: { type: Boolean, default: false }
  },
  computed: {
    classes() {
      return {
        "fd-shell__footer--fixed": this.fixed
      };
    }
  }
};
</script>
