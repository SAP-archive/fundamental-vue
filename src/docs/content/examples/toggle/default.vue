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
