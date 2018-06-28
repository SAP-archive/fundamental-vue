<template>
    <pre><slot /></pre>
</template>

<script>
export default {
  name: "DocsText"
};
</script>

<style scoped>
  pre {
    border: 1px solid #ccc;
    border-radius: 0 0 4px 4px;
    padding: 15px;
    margin: 0;
    font-size: 13px;
    background-color: #fff !important;
  }
</style>