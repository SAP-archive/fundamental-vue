<title>Toggle</title>
<docs>`FdToggle` has an optional label. Use the `on`-prop to turn a toggle on (`:on=true`) or off (`:on=false`). Set `disabled`-flag to disable user interaction.</docs>
<template>
  <div>
    <FdToggle label="Default Toggle"></FdToggle>
    <FdToggle :on=true></FdToggle>
    <FdToggle disabled></FdToggle>
  </div>
</template>