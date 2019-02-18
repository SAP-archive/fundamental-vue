<title>TimeItem</title>
<docs>
The `FdTimeItem` is used in the popover to pick time that is associated with the `FdTimePicker` component. 
```
<FdTimeItem />
```
</docs>
<template>
  <div>
    <FdTimeItem
      :showMeridian="showMeridian"
      :value="value"
      @update:value="onTimeItemUpdate"
    ></FdTimeItem>
  </div>
</template>

<script>
export default {
  methods: {
    onTimeItemUpdate(time) {
      // handle timeItemUpdate.
    }
  },
  data() {
    return {
      showMeridian: true,
      value: "12:00:00 pm"
    };
  }
};
</script>
