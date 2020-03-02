<template functional>
  <FdFormItem v-bind="data.attrs">
    <slot />
    <FdCheckboxLabel :for="props.id">
      {{ props.label }}
    </FdCheckboxLabel>
    <template #message>
      <slot name="message" />
    </template>
  </FdFormItem>
</template>

<script>
import FdCheckboxLabel from './../checkbox-label/checkbox-label.vue'
import FdFormItem from './../form-item/form-item.vue'

export default {
  functional: true,
  name: 'FdFormItemCheckbox',
  components: {
    FdCheckboxLabel,
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
