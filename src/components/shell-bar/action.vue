<template>
  <div class="fd-shellbar__action" :class="classes"><slot /></div>
</template>

<script>
export default {
  name: 'FdShellBarAction',
  props: {
    desktopOnly: { type: Boolean, default: false },
    mobileOnly: { type: Boolean, default: false }
  },
  computed: {
    classes() {
      return {
        'fd-shellbar__action--desktop': this.desktopOnly,
        'fd-shellbar__action--mobile': this.mobileOnly
      }
    }
  }
}
</script>
