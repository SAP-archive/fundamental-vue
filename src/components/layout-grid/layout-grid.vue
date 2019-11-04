<template>
  <div class="fd-layout-grid" :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'FdLayoutGrid',
  props: {
    gap: {
      type: String,
      default: null,
      validator: value => value === 'none' || value === '1'
    },
    col: {
      type: Number,
      default: null,
      validator: value => value >= 1 && value <= 6
    }
  },
  computed: {
    classes() {
      const { col, gap } = this
      return [
        col == null ? null : `fd-layout-grid--col-${col}`,
        {
          'fd-layout-grid--no-gap': gap === 'none',
          'fd-layout-grid--gap-1': gap === '1'
        }
      ]
    }
  }
}
</script>
