<template>
  <div class="fd-tabs__panel" :aria-expanded="String(active)" role="tabpanel">
    <!-- todo: id-attr is missing -->
    <slot />
  </div>
</template>

<script>
export default {
  name: 'FdTabPanel',
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>
