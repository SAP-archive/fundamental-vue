<template>
  <component :is="layout" />
</template>

<script>
const DEFAULT_LAYOUT = "Default";
export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || DEFAULT_LAYOUT) + "Layout";
    }
  }
};
</script>
