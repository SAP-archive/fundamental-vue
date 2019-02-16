<title>Notification Counter</title>
<template>
  <div>
    <div>
      The ideal upper limit on the number of characters in the Counter value is
      4 characters. Try to keep the range from 0 to 999+
    </div>
    <br />
    <br />
    <FdCounter type="notification" :value="counter1"></FdCounter>
  </div>
</template>
<script>
export default {
  data() {
    return {
      counter1: 23
    };
  }
};
</script>
