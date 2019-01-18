<title>Toggle and `v-model`</title>
<docs>
`FdToggle` supports `v-model`. This allows you to bind an `FdToggle` to a `boolean` property of your component. The example below uses `v-model` to control the visbibility of a popover.
</docs>

<template>
  <div>
    <p>The following toggles will stay in sync and control the popover's visibilit.</p>
    <FdFormSet>
    <FdFormItem :label="String(isOn)">
      <FdToggle v-model="isOn"  />
    </FdFormItem>
    <FdFormItem :label="String(isOn)">
      <FdToggle v-model="isOn" />
    </FdFormItem>

    </FdFormSet>
    <FdButton @click="isOn = !isOn">Toggle</FdButton>
    <br /><br />
    <FdPopover v-model="isOn">
      <div slot="body" v-padding:large><h1>hi</h1></div>
    </FdPopover>
  </div>
</template>

<script>
export default {
  data: () => ({ isOn: false })
}
</script>
