<template>
  <FdButton
    v-bind="$attrs"
    v-on="$listeners"
    :aria-pressed="String(pressed)"
    @click="toggle"
    :compact="finalCompact"
  >
    <!-- button content – usually plain text -->
    <slot />
  </FdButton>
</template>

<script>
import FdButton from './../button/button.vue'
import Compactable from './../../mixins/compactable'
import normalizeValue from './normalize-value'

// A button which must be placed inside a button group.
export default {
  name: 'FdButtonGroupButton',
  components: { FdButton },
  mixins: [Compactable],
  inject: ['group'],
  props: {
    // The value associated with this button when selected.
    value: {
      type: [String, Number, Boolean],
      default: null
    }
  },
  methods: {
    toggle() {
      return this.group.didClickButton(this.value)
    }
  },
  computed: {
    normalizedGroupValue() {
      return normalizeValue(this.groupValue)
    },
    groupValue() {
      return this.group.value
    },
    pressed() {
      return this.normalizedGroupValue.indexOf(this.value) >= 0
    }
  }
}
</script>
