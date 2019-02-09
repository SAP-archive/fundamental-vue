<template>
  <component :is="layout"/>
</template>

<script>
import Vue from "vue";

const DEFAULT_LAYOUT = "Default";

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || DEFAULT_LAYOUT) + "Layout";
    }
  }
};
</script>
