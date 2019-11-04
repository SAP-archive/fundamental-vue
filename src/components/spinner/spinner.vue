<template>
  <div class="fd-spinner" :aria-hidden="String(hidden)" :aria-label="label">
    <div class="fd-spinner__body" />
  </div>
</template>

<script>
export default {
  name: 'FdSpinner',
  props: {
    label: { type: String, default: 'Loading' },
    hidden: { type: Boolean, default: false }
  },
  computed: {
    classes() {
      return {
        'is-hidden': this.hidden
      }
    }
  }
}
</script>
