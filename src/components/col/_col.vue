<template>
  <div class="fd-col" :class="classes">
    <slot />
  </div>
</template>

<script>
// Column-component – used together with `fd-container`.
export default {
  name: "FdCol",
  props: {
    // Number of columns to span
    span: {
      type: Number,
      // `null` – width is automatically computed
      default: null
    },
    // Number of columns to shift the column
    shiftBy: {
      type: Number,
      // `null` – no shifting
      default: null
    }
  },
  computed: {
    classes() {
      const { span, shiftBy } = this;
      return [
        span == null ? "" : `fd-col--${span}`,
        shiftBy == null ? "" : `fd-col--shift-${shiftBy}`
      ];
    }
  }
};
</script>
