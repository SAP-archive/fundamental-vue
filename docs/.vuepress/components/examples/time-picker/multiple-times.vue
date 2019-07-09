<template>
  <div>
    <FdTime
      v-for="item in timeitems"
      :key="item.type"
      :type="item.type"
      :value="item.value"
    ></FdTime>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeitems: [
        {
          type: "hour12",
          value: "10"
        },
        {
          type: "minute",
          value: "30"
        },
        {
          type: "second",
          value: "00"
        },
        {
          type: "meridian",
          value: "am"
        }
      ]
    };
  }
};
</script>
