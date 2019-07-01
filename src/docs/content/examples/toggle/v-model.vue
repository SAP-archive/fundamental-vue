<template>
  <div>
    <p>
      The following toggles will stay in sync and control the popover's visibilit.
    </p>
    <fd-field-set>
      <fd-form-item-toggle :label="String(isOn)">
        <fd-toggle v-model="isOn" />
      </fd-form-item-toggle>
      <fd-form-item-toggle :label="String(isOn)">
        <fd-toggle v-model="isOn" />
      </fd-form-item-toggle>
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
