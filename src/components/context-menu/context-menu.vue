<template>
  <fd-menu-popover placement="bottom-end" :flips="false" :offset="-3">
    <template #control="popoverProps">
      <!-- custom `fd-context-button` -->
      <slot name="button" v-bind="controlProps(popoverProps)">
        <fd-context-button @click="popoverProps.toggle" />
      </slot>
    </template>
    <template #default>
      <!-- one or more `fd-menu-list`'s -->
      <slot />
    </template>
  </fd-menu-popover>
</template>

<script>
import FdMenuPopover from './../menu-popover/menu-popover.vue'
import FdContextButton from './../context-button/context-button.vue'

// Context menu component
export default {
  name: 'FdContextMenu',
  components: {
    FdMenuPopover,
    FdContextButton
  },
  methods: {
    controlProps(controlProps) {
      return {
        ...controlProps,
        toggleContextMenu: controlProps.toggle
      }
    }
  }
}
</script>
