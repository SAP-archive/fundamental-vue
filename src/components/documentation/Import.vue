<template>
    <code>import &#123; {{ module }} &#125; from '{{ path }}';</code>
</template>

<script>
export default {
  name: "Import",
  props: {
    module: {
      default: "",
      type: String,
      required: true
    },
    path: {
      default: "",
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
</style>