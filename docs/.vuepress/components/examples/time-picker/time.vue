<template>
  <div>
    <FdTime :value="value" @update:value="onTimeUpdate" type="hour24"></FdTime>
  </div>
</template>

<script>
export default {
  methods: {
    onTimeUpdate(time) {
      console.log(time); // eslint-disable-line no-console
    }
  },
  data: () => ({ value: 17 })
};
</script>
