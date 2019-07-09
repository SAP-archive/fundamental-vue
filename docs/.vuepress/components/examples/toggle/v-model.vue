<template>
  <div>
    <p>
      The following toggles will stay in sync and control the popover's
      visibilit.
    </p>
    <FdFormSet>
      <FdFormItem :label="String(isOn)">
        <FdToggle v-model="isOn" />
      </FdFormItem>
      <FdFormItem :label="String(isOn)">
        <FdToggle v-model="isOn" />
      </FdFormItem>
    </FdFormSet>
    <fd-popover placement="right" ref="popover">
      <template #control>
        <fd-button @click="isOn = !isOn">Toggle</fd-button>
      </template>
      <template #default>
        <div v-fd-padding:large><h1>hi</h1></div>
      </template>
    </fd-popover>
  </div>
</template>

<script>
export default {
  watch: {
    isOn(on) {
      const popover = this.$refs.popover;
      on ? popover.show() : popover.hide();
    }
  },
  data: () => ({ isOn: false })
};
</script>
