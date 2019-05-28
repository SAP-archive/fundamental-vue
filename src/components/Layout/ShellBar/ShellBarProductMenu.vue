<template>
  <div class="fd-product-menu">
    <fd-popover placement="bottom-start">
      <template #control="{toggle}">
        <button @click="toggle" class="fd-product-menu__control">
          <fd-shell-bar-product-title class="fd-product-menu__title">
            <slot name="title" />
          </fd-shell-bar-product-title>
        </button>
      </template>
      <template #default="bodyProps">
        <!--
          This seems strange but is for backward compatibility:
          Currently, consumers use the menu-slot to render a custom menu.
          Now they can use the default slot instead which renders a menu
          on their behalf and additionally hides the popover body when clicked.
        -->
        <slot name="menu">
          <fd-menu @select="bodyProps.hide">
            <slot v-bind="bodyProps" />
          </fd-menu>
        </slot>
      </template>
    </fd-popover>
  </div>
</template>

<script>
import FdMenu from "./../../Menu/Menu.vue";
import FdPopover from "./../../Popover/Popover.vue";
import FdShellBarProductTitle from "./ShellBarProductTitle.vue";

export default {
  name: "FdShellBarProductMenu",
  components: { FdPopover, FdMenu, FdShellBarProductTitle }
};
</script>
