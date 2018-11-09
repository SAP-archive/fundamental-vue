<template>
  <div class="tokens">
    <vf-token @click="click">Click Me</vf-token>
    <vf-token>Lorem</vf-token>
    <vf-token>Dolor</vf-token>
    <vf-token>Filter</vf-token>
  </div>
</template>

<script>
export default {
  methods: {
    click() {
      window.alert('Clicked!');
    },
  },
};
</script>

<style scoped>
.tokens,
* {
  margin-right: 10px;
}
</style>