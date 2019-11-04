<template>
  <div>
    <FdFormItemToggle label="Default Toggle: on">
      <FdToggle on />
    </FdFormItemToggle>
    <FdFormItemToggle label="on">
      <FdToggle :value="Boolean(true)" size="xs" />
    </FdFormItemToggle>
  </div>
</template>
<script>
export default {
  data() {
    return {
      on: false
    }
  }
}
</script>

<style>
.xxx {
  width: 200px;
  height: 200px;
}
</style>
