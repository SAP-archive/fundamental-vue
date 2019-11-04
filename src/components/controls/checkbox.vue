<template>
  <input
    class="fd-checkbox"
    :class="classes"
    type="checkbox"
    :checked="checked"
    @change="updateInput"
    v-on="$listeners"
    :value="value"
    v-bind="$attrs"
  />
</template>

<script>
import { isInputElement } from './helper'
import withoutDuplicates from './../../util/without-duplicates'
export default {
  name: 'FdCheckbox',
  model: {
    event: 'update',
    prop: 'modelValue'
  },
  props: {
    trueValue: {
      type: [String, Number, Boolean],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    },
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    modelValue: {
      type: [Array, String, Number, Boolean],
      default: false
    },
    compact: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        'fd-checkbox--compact': this.compact
      }
    },
    checked() {
      const { modelValue, value, trueValue } = this
      if (Array.isArray(modelValue)) {
        if (value == null) {
          throw Error('value cannot be null')
        }
        return modelValue.indexOf(value) >= 0
      }
      return modelValue === trueValue
    }
  },
  methods: {
    updateInput(event) {
      const { target } = event
      if (target == null) {
        return
      }
      if (!isInputElement(target)) {
        return
      }
      const { checked } = target
      const { modelValue, value, trueValue, falseValue } = this
      if (value == null) {
        throw Error('value cannot be null')
      }
      if (Array.isArray(modelValue)) {
        let newValue = [...modelValue]
        if (checked) {
          newValue.push(value)
        } else {
          newValue = newValue.filter(currentValue => currentValue !== value)
        }
        const newValueWithoutDuplicates = withoutDuplicates(newValue)
        this.$emit('update', newValueWithoutDuplicates, event)
      } else {
        this.$emit('update', checked ? trueValue : falseValue, event)
      }
    }
  }
}
</script>
