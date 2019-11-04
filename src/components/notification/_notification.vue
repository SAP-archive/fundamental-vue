<template>
  <div class="fd-notification" :class="classes" v-show="active_">
    <slot />
  </div>
</template>

<script>
import validateType from './validate-type'
import validateSize from './validate-size'

export default {
  name: 'FdNotification',
  props: {
    size: {
      type: String,
      default: 'l',
      validator: validateSize
    },
    type: {
      type: String,
      default: null,
      validator: validateType
    },
    active: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    active: {
      immediate: true,
      handler(active) {
        this.active_ = active
      }
    }
  },
  methods: {
    deactivate() {
      this.active_ = false
      this.$emit('update:active', this.active_)
    },
    activate() {
      this.active_ = true
      this.$emit('update:active', this.active_)
    }
  },
  data() {
    return {
      active_: this.active
    }
  },
  computed: {
    classes() {
      const { type, size } = this
      return [type == null ? '' : `fd-notification--${type}`, `fd-notification--${size}`]
    }
  }
}
</script>
