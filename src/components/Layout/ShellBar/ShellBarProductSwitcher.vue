<template>
  <div class="fd-product-switcher">
    <FdPopover withArrow placement="bottom-end">
      <template #control="{toggle}">
        <slot name="control">
          <FdShellBarActionButton @click="toggle" icon="grid" />
        </slot>
      </template>
      <template #default>
        <div class="fd-product-switcher__body">
          <nav>
            <ul>
              <slot />
            </ul>
          </nav>
        </div>
      </template>
    </FdPopover>
  </div>
</template>

<script>
import FdPopover from "./../../Popover/Popover.vue";
import FdShellBarActionButton from "./ShellBarActionButton.vue";
export default {
  name: "FdShellBarProductSwitcher",
  components: { FdShellBarActionButton, FdPopover }
};
</script>
