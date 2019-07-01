<template>
  <div>
    <h2>Related Components</h2>
    <d-related-components :component-names="componentNames" />
  </div>
</template>

<script>
export default {
  props: {
    componentNames: {
      type: Array,
      default: () => []
    }
  }
};
</script>
