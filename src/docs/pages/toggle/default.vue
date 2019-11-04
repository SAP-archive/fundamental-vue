<template>
  <FdFieldset>
    <FdFormItemToggle label="Default Toggle: on">
      <FdToggle on />
    </FdFormItemToggle>

    <FdFormItemToggle label="Default Toggle: off">
      <FdToggle :on="false" />
    </FdFormItemToggle>

    <FdFormItemToggle label="Disabled Toggle: on">
      <FdToggle disabled on />
    </FdFormItemToggle>

    <FdFormItemToggle label="Disabled Toggle: off">
      <FdToggle disabled :on="false" />
    </FdFormItemToggle>
  </FdFieldset>
</template>
