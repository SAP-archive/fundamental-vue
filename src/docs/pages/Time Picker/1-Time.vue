<title>Time</title>
<docs>The `FdTime` component is used for a single time value. Multiple components can be used in the time-picker to assemble a clock time. A max of four will account for hours, minutes, seconds and period of the day.
```
<FdTime />
```
It will be rare to see this component used outside of it being composed in the time-picker component.
</docs>
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
