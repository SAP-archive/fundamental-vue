<template>
  <div :class="classes" />
</template>

<script>
import validateType from './../validate-type'

export default {
  name: 'FdNotificationIndicator',
  props: {
    type: {
      type: String,
      validator: validateType,
      required: true
    }
  },
  computed: {
    classes() {
      return `fd-notification__indicator--${this.type}`
    }
  }
}
</script>
