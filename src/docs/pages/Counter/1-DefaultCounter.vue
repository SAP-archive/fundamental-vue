<title>Default Counter</title>
<template>
  <div>
    <FdCounter :value="counter" class="counterMargin"></FdCounter>
    <FdCounter :value="counter2"></FdCounter>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 23,
      counter2: 1234
    };
  }
};
</script>

<style scoped>
.counterMargin {
  margin-right: 10px;
}
</style>
