<template>
  <span class="type-token">{{ propType }}</span>
</template>

<script>
export default {
  props: {
    propType: String
  }
};
</script>

<style>
.type-token {
  font-size: 12px;
  padding: 5px;
}
</style>
