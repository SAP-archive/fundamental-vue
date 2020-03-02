<template functional>
  <FdFormItem v-bind="data.attrs">
    <slot />
    <FdRadioLabel :for="props.id">
      {{ props.label }}
    </FdRadioLabel>
    <template #message>
      <slot name="message" />
    </template>
  </FdFormItem>
</template>

<script>
import FdRadioLabel from './../radio-label/radio-label.vue'
import FdFormItem from './../form-item/form-item.vue'

export default {
  functional: true,
  name: 'FdFormItemRadio',
  components: {
    FdRadioLabel,
    FdFormItem
  },
  props: {
    id: String,
    label: {
      type: String,
      required: true
    }
  }
}
</script>
