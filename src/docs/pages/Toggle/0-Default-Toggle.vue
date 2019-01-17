<title>Toggle</title>
<docs>`FdToggle` has an optional label. Use the `on`-prop to turn a toggle on (`:on=true`) or off (`:on=false`). Set `disabled`-flag to disable user interaction.</docs>
<template>
  <div>
    <FdToggle v-model="isOn" />
    <FdToggle v-model="isOnToggleOn" />
    <FdToggle disabled></FdToggle>
  </div>
</template>

<script>
export default {
  data: () => ({
    isOn: false,
    isOnToggleOn: false,
  })
}
</script>
