<template>
  <label class="fd-form-label" :class="classes" :aria-required="String(required)">
    <slot />
  </label>
</template>

<script>
export default {
  name: 'FdFormLabel',
  props: {
    required: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: null,
      validator(value) {
        return value === 'toggle' || value === 'check' || value === 'radio'
      }
    }
  },
  computed: {
    classes() {
      return {
        'fd-form-label--required': this.required,
        'fd-form-label--checkbox': this.type === 'check',
        'fd-form-label--radio': this.type === 'radio',
        'fd-form-label--toggle': this.type === 'toggle'
      }
    }
  }
}
</script>
