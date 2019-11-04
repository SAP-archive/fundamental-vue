<template>
  <div class="fd-form-item" :class="classes">
    <slot />
    <slot name="message" />
  </div>
</template>

<script>
export default {
  name: 'FdFormItem',
  props: {
    inline: { type: Boolean, default: null },
    horizontal: { type: Boolean, default: false }
  },
  computed: {
    classes() {
      return {
        'fd-form-item--inline': this.inline,
        'fd-form-item--horizontal': this.horizontal
      }
    }
  }
}
</script>
