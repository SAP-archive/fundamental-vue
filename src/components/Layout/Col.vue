<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  name: "FdCol",
  props: {
    span: { type: Number, default: null }
  },
  computed: {
    classes() {
      const colClass = "fd-col";
      const span = this.span;
      if (span != null) {
        return [colClass, `fd-col--${span}`];
      }
      return [colClass];
    }
  }
};
</script>
