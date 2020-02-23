<template>
  <div class="fd-message-strip" :class="classes" role="alert">
    <slot name="close-button" v-if="dismissible">
      <FdMessageStripCloseButton @click="$emit('dismiss')" />
    </slot>
    <slot name="content">
      <FdMessageStripText>
        <slot />
      </FdMessageStripText>
    </slot>
  </div>
</template>

<script>
import FdMessageStripCloseButton from './close.vue'
import FdMessageStripText from './text.vue'

export default {
  name: 'FdMessageStrip',
  components: { FdMessageStripText, FdMessageStripCloseButton },
  props: {
    dismissible: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: null,
      validator: value => ['information', 'success', 'warning', 'error', null].indexOf(value) > -1
    }
  },
  computed: {
    classes() {
      const { type, dismissible } = this
      return {
        'fd-message-strip--dismissible': dismissible === true,
        'fd-message-strip--information': type === 'information',
        'fd-message-strip--success': type === 'success',
        'fd-message-strip--warning': type === 'warning',
        'fd-message-strip--error': type === 'error'
      }
    }
  }
}
</script>
