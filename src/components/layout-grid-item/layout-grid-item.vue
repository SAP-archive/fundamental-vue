<template>
  <component :is="tag" :class="classes"><slot /></component>
</template>

<script>
export default {
  name: 'FdLayoutGridItem',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    span: {
      type: Number,
      default: null,
      validator: value => value == null || (value >= 2 && value <= 6)
    }
  },
  computed: {
    classes() {
      const { span } = this
      return span == null ? [] : `fd-layout-grid__span-column-${span}`
    }
  }
}
</script>
