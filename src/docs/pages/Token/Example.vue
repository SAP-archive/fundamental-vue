<template>
  <div class="tokens">
    <FdToken @click="click">Click Me</FdToken>
    <FdToken>Lorem</FdToken>
    <FdToken>Dolor</FdToken>
    <FdToken>Filter</FdToken>
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