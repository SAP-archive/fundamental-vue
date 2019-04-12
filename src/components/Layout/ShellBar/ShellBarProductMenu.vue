<template>
  <div class="fd-product-menu">
    <Popover placement="bottom-end">
      <template #control="{toggle}">
        <button @click="toggle" class="fd-product-menu__control">
          <ShellBarProductTitle class="fd-product-menu__title">
            <slot name="title" />
          </ShellBarProductTitle>
        </button>
      </template>
      <template #default>
        <slot name="menu" />
      </template>
    </Popover>
  </div>
</template>

<script>
import { Popover } from "./../../Popover";
import ShellBarProductTitle from "./ShellBarProductTitle.vue";

export default {
  name: "FdShellBarProductMenu",
  components: { Popover, ShellBarProductTitle }
};
</script>
