<template>
  <div style="display: flex;">
    <fd-timePicker :showMeridian="meridianTime.showMeridian" :value="meridianTime.value" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      meridianTime: {
        showMeridian: true,
        value: "10:30:23 am"
      },
      millitaryTime: {
        value: "22:30:23"
      }
    };
  }
};
</script>
