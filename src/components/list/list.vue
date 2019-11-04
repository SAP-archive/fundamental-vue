<template>
  <ul class="fd-list" :class="classes">
    <slot />
  </ul>
</template>

<script>
export default {
  name: 'FdList',
  props: {
    compact: {
      type: Boolean,
      default: false
    },
    borderless: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        'fd-list--no-border': this.borderless,
        'fd-list--compact': this.compact
      }
    }
  }
}
</script>
