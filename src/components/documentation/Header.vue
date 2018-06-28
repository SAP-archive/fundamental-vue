<template>
    <h1><slot /></h1>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
  h1 {
    margin-top: 2rem;
    font-size: 2.2rem;
  }
</style>
