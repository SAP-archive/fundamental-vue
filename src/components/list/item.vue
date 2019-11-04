<template>
  <span class="fd-list__item" :class="classes" :aria-selected="String(selected)">
    <slot />
  </span>
</template>

<script>
export default {
  name: 'FdListItem',
  props: {
    selected: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        'is-active': this.active
      }
    }
  }
}
</script>
