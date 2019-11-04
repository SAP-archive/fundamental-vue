<template>
  <input
    class="fd-input"
    :class="classes"
    :value="value"
    @blur="handleBlur"
    @focus="handleFocus"
    v-on="listeners"
    v-bind="$attrs"
  />
</template>

<script>
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
  name: 'FdTextInput',
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
        'fd-input--compact': compact,
        ...(state == null ? {} : { [`is-${state}`]: true })
      }
    }
  },
  props: {
    state: {
      type: String,
      default: null,
      validator(value) {
        return (
          value === 'invalid' || value === 'valid' || value === 'warning' || value === 'information'
        )
      }
    },
    value: {
      type: [String, Number, Boolean],
      default: ''
    },
    compact: {
      type: Boolean,
      default: false
    }
  }
}
</script>
