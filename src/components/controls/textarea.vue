<template>
  <textarea
    class="fd-textarea"
    :class="classes"
    :value="value"
    @blur="handleBlur"
    @focus="handleFocus"
    v-on="listeners"
    v-bind="$attrs"
  />
</template>

<script>
import { $default, $valueWithDefault } from './helper/prop'

export default {
  methods: {
    handleBlur(event) {
      this.focused = false
      this.$emit('blur', event)
    },
    handleFocus(event) {
      this.focused = true
      this.$emit('focus', event)
    },
    handleChange(event) {
      this.$emit('change', event.target.value)
    },
    handleUpdate(event) {
      this.$emit('update', event.target.value)
    }
  },
  name: 'FdTextarea',
  model: {
    event: 'update'
  },
  data() {
    return {
      focused: false
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        change: this.handleChange,
        input: this.handleUpdate
      }
    },
    classes() {
      const { state, compact } = this
      return {
        'fd-textarea--compact': compact,
        ...(state == null ? {} : { [`is-${state}`]: true })
      }
    }
  },
  props: {
    type: $default('text'),
    value: $valueWithDefault(''),
    compact: {
      type: Boolean,
      default: false
    },
    state: {
      type: String,
      default: null,
      validator(value) {
        return (
          value === 'invalid' || value === 'valid' || value === 'warning' || value === 'information'
        )
      }
    }
  }
}
</script>
