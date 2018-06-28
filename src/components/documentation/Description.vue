<template>
    <p class="description"><slot /></p>
</template>

<script>
export default {
  name: "Description"
};
</script>

<style scoped>
  div {
    margin-bottom: 1.5rem;
    font-size: 1rem;
    font-weight: 300;
  }
</style>