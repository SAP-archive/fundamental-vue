<template functional>
  <FdFormItem v-bind="data.attrs">
    <FdFormLabel type="toggle">
      <slot />
      {{ props.label }}
    </FdFormLabel>
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
  name: 'FdFormItemToggle',
  components: {
    FdFormLabel,
    FdFormItem
  },
  props: {
    label: {
      type: String,
      required: true
    }
  }
}
</script>
