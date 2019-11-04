<template>
  <fd-popover ref="popover" body-size-mode="equal-trigger" placement="bottom-start">
    <template #control="{ hide, show, toggle }">
      <fd-input-group>
        <template #input>
          <slot name="input" :hideCompletions="hide" :showCompletions="show" />
        </template>

        <template #after>
          <slot name="after" :toggleCompletions="toggle" />
        </template>
      </fd-input-group>
    </template>

    <template #default="{hide}">
      <slot :hideCompletions="hide" />
    </template>
  </fd-popover>
</template>

<script>
import Uid from './../../mixins/uid'
import FdInputGroup from './../input-group/input-group.vue'
import FdPopover from './../popover/popover.vue'

export default {
  name: 'FdComboboxBase',
  mixins: [Uid],
  model: {
    prop: 'value',
    event: 'update'
  },
  components: {
    FdPopover,
    FdInputGroup
  },
  computed: {
    popover() {
      return this.$refs.popover
    }
  },
  methods: {
    show() {
      this.popover.show()
    },
    hide() {
      this.popover.hide()
    },
    toggle() {
      this.popover.toggle()
    }
  },
  props: {
    popoverControlClass: {
      type: [Array, Object, String],
      default: null
    },
    popoverClass: {
      type: [Array, Object, String],
      default: null
    },
    ignoredElements: { type: Function, default: () => [] },
    value: { type: String, default: null },
    placeholder: { type: String, default: '' },
    compact: { type: Boolean, default: false }
  },
  data() {
    return {
      currentValue: this.value
    }
  }
}
</script>
