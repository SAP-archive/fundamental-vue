<template>
  <div class="tokens">
    <fd-token @click="click">Click Me</fd-token>
    <fd-token>Lorem</fd-token>
    <fd-token>Dolor</fd-token>
    <fd-token>Filter</fd-token>
  </div>
</template>

<script>
export default {
  methods: {
    click() {
      window.alert("Clicked!");
    }
  }
};
</script>
