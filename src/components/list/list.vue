<template>
  <ul class="fd-list" :class="classes">
    <slot />
  </ul>
</template>

<script>
import { default as ListType, all as ListTypes } from './type'

export default {
  name: 'FdList',
  props: {
    compact: {
      type: Boolean,
      default: false
    },
    borderless: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: null,
      validator: type => type == null || ListTypes.indexOf(type) >= 0
    }
  },
  computed: {
    classes() {
      const { borderless, compact, type } = this
      return {
        'fd-list--no-border': this.borderless,
        'fd-list--compact': this.compact,
        'fd-list--multi-input': type === ListType.multiInput,
        'fd-list--dropdown': type === ListType.dropdown
      }
    }
  }
}
</script>
