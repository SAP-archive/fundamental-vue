<title>Toggle</title>
<docs>
`fd-form-item-toggle` has an optional label. Use the `on`-prop to turn a toggle on (`:on=true`) or off (`:on=false`). Set `disabled`-flag to disable user interaction.
</docs>

<template>
  <fd-field-set>
    <fd-form-item-toggle label="Default Toggle: on">
      <fd-toggle on />
    </fd-form-item-toggle>

    <fd-form-item-toggle label="Default Toggle: off">
      <fd-toggle :on="false" />
    </fd-form-item-toggle>

    <fd-form-item-toggle label="Disabled Toggle: on">
      <fd-toggle disabled on />
    </fd-form-item-toggle>

    <fd-form-item-toggle label="Disabled Toggle: off">
      <fd-toggle disabled :on="false" />
    </fd-form-item-toggle>
  </fd-field-set>
</template>
