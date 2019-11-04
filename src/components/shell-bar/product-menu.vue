<template>
  <div class="fd-product-menu">
    <fd-menu-popover
      :flips="false"
      :body-styles="{
        overflowY: 'auto',
        maxHeight: 'calc(100vh - 65px)'
      }"
      discard-highlight
      :offset="10"
      body-size-mode="at-least-trigger"
      placement="bottom-start"
    >
      <template #control="{toggle}">
        <button @click="toggle" class="fd-product-menu__control">
          <fd-shell-bar-product-title class="fd-product-menu__title">
            <slot name="title" />
          </fd-shell-bar-product-title>
        </button>
      </template>
      <template #default="bodyProps">
        <slot v-bind="bodyProps" />
      </template>
    </fd-menu-popover>
  </div>
</template>

<script>
import FdMenuPopover from './../menu-popover/menu-popover.vue'
import FdShellBarProductTitle from './product-title.vue'

export default {
  name: 'FdShellBarProductMenu',
  components: { FdMenuPopover, FdShellBarProductTitle }
}
</script>
