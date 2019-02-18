<title>Calendar & `v-model`</title>
<docs>`FdCalendar` supports `v-model`. The example below shows two calendars bound to the same model.</docs>
<template>
  <div style="display:flex;">
    <FdCalendar selectionMode="range" v-model="selection" />
    <FdCalendar selectionMode="range" v-model="selection" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      selection: []
    };
  }
};
</script>
