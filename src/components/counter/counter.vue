<template>
  <span class="fd-counter" :class="classes" :aria-label="label">{{ formattedValue }}</span>
</template>

<script>
// Component that renders a counter.
export default {
  name: 'FdCounter',
  props: {
    // If `true` the counter is supposed to represent the number of unread notifications.
    // In that case you should wrap the counter inside an `fd-button` that displays the `bell`-icon.
    notification: {
      type: Boolean,
      default: false
    },
    // Label of the counter. Will be rendered as an aria-label-attribute.
    // Is required because it is important for a11y-reasons.
    label: {
      type: String,
      required: true
    },
    // counter value
    value: {
      // A number between 1 and a very big number. Will be automatically formatted.
      type: Number,
      // `1`
      default: 1,
      validator: value => value >= 1
    }
  },
  computed: {
    formattedValue() {
      const { value } = this
      return !isNaN(Number(value)) ? (Number(value) <= 999 ? String(value) : '999+') : '1'
    },
    classes() {
      return {
        'fd-counter--notification': this.notification
      }
    }
  }
}
</script>
