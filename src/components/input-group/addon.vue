<template>
  <span class="fd-input-group__addon" :class="classes"><slot /></span>
</template>

<script>
// Use this in before-/after-slots within fd-input-groups.
export default {
  name: 'FdInputGroupAddon',
  props: {
    compact: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        'fd-input-group__addon--compact': this.compact
      }
    }
  }
}
</script>
