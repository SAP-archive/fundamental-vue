<title>Toggle</title>
<docs>
`FdFormItem` has an optional label. Use the `on`-prop to turn a toggle on (`:on=true`) or off (`:on=false`). Set `disabled`-flag to disable user interaction.
</docs>

<template>
  <FdFormSet>
    <FdFormItem label="Default Toggle: on">
      <FdToggle on />
    </FdFormItem>

    <FdFormItem label="Default Toggle: off">
      <FdToggle :on="false" />
    </FdFormItem>

    <FdFormItem label="Disabled Toggle: on">
      <FdToggle disabled on />
    </FdFormItem>

    <FdFormItem label="Disabled Toggle: off">
      <FdToggle disabled :on="false" />
    </FdFormItem>
  </FdFormSet>
</template>
