<template>
  <ul class="fd-tree__group" :class="classes" :aria-hidden="String(hidden)">
    <slot />
  </ul>
</template>

<script>
export default {
  name: 'FdTreeGroup',
  props: {
    hidden: {
      type: Boolean,
      default: true
    },
    level: {
      type: Number,
      default: 1
    }
  },
  computed: {
    classes() {
      return [
        `fd-tree__group--sublevel-${this.level}`,
        {
          'is-hidden': this.hidden
        }
      ]
    }
  }
}
</script>
