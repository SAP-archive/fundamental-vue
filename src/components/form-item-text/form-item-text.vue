<template functional>
  <FdFormItem v-bind="data.attrs">
    <FdFormLabel :required="props.required">{{ props.label }}</FdFormLabel>
    <slot />
    <template #message>
      <slot name="message" />
    </template>
  </FdFormItem>
</template>

<script>
import FdFormLabel from './../form-label/form-label.vue'
import FdFormItem from './../form-item/form-item.vue'

export default {
  functional: true,
  name: 'FdFormItemText',
  components: {
    FdFormLabel,
    FdFormItem
  },
  props: {
    label: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      default: false
    }
  }
}
</script>
