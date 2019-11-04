<template>
  <div class="fd-user-menu">
    <FdPopover ref="popover" with-arrow placement="bottom-end">
      <template #control="{toggle}">
        <slot name="control" :toggle="toggle">
          <fd-shell-bar-user-menu-control @click="toggle" />
        </slot>
      </template>
      <template #default>
        <slot />
      </template>
    </FdPopover>
  </div>
</template>

<script>
import FdPopover from './../popover/popover.vue'
import FdShellBarUserMenuControl from './user-menu-control.vue'

export default {
  name: 'FdShellBarUserMenu',
  components: { FdShellBarUserMenuControl, FdPopover },
  methods: {
    close() {
      this.popover().hide()
    },
    popover() {
      return this.$refs.popover
    }
  }
}
</script>
