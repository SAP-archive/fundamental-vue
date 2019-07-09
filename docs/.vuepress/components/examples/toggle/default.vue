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
