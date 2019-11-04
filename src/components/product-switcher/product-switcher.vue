<template>
  <div class="fd-product-switch">
    <FdPopover withArrow placement="bottom-end">
      <template #control="{toggle}">
        <slot name="control">
          <FdShellBarActionButton @click="toggle" icon="grid" />
        </slot>
      </template>
      <template #default>
        <div class="fd-product-switch__body">
          <ul class="fd-product-switch__list">
            <slot />
          </ul>
        </div>
      </template>
    </FdPopover>
  </div>
</template>

<script>
import FdPopover from './../popover/popover.vue'
import FdShellBarActionButton from './../shell-bar/action-button.vue'

export default {
  name: 'FdProductSwitcher',
  components: { FdShellBarActionButton, FdPopover }
}
</script>
