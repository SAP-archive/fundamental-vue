<template>
  <div class="fd-product-menu">
    <Popover placement="right">
      <div slot="control">
        <button class="fd-product-menu__control">
          <ShellBarProductTitle class="fd-product-menu__title">
            <slot name="title" />
          </ShellBarProductTitle>
        </button>
      </div>
      <slot name="menu" />
    </Popover>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Popover } from "@/components/Popover";
import ShellBarProductTitle from "./ShellBarProductTitle.vue";

export default Vue.extend({
  name: "FdShellBarProductMenu",
  components: { Popover, ShellBarProductTitle }
});
</script>
