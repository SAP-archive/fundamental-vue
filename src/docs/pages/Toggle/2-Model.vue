<title>Toggle and `v-model`</title>
<docs>
`FdToggle` supports `v-model`. This allows you to bind an `FdToggle` to a `boolean` property of your component. The example below uses `v-model` to control the visbibility of a popover.
</docs>

<template>
  <div>
    <p>
      The following toggles will stay in sync and control the popover's
      visibilit.
    </p>
    <fd-field-set>
      <FdFormItem :label="String(isOn)">
        <FdToggle v-model="isOn" />
      </FdFormItem>
      <FdFormItem :label="String(isOn)">
        <FdToggle v-model="isOn" />
      </FdFormItem>
    </fd-field-set>
    <fd-popover ref="popover">
      <template #control>
        <fd-button @click="isOn = !isOn">Toggle</fd-button>
      </template>
      <div v-fd-padding:large><h1>hi</h1></div>
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
