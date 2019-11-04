<template>
  <button class="fd-tree__control" :class="classes">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'FdTreeControl',
  props: {
    expanded: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        'is-pressed': this.expanded
      }
    }
  }
}
</script>
