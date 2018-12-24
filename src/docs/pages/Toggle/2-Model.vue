<title>Toggle and `v-model`</title>
<docs>`FdToggle` supports `v-model`. This allows you to bind an `FdToggle` to a `boolean` property of your component. The example below uses `v-model` to control the visbibility of a popover.</docs>
<template>
  <div>
    <FdToggle v-model="isOn" :label="String(isOn)" />
    <FdToggle v-model="isOn" :label="String(isOn)" />
    <FdButton @click="isOn = !isOn">Toggle the Toggles</FdButton>
    <FdPopover v-model="isOn">
      <div v-padding:large><h1>hi</h1></div>
    </FdPopover>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOn: false,
    }
  }
}
</script>
