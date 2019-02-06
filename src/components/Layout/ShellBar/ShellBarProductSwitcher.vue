<template>
  <div class="fd-product-switcher">
    <Popover placement="right">
      <div class="fd-user-menu__control" slot="control">
        <slot name="control">
          <Button styling="light" class="fd-button--shell" icon="grid"/>
        </slot>
      </div>
      <div slot="body" class="fd-product-switcher__body">
        <nav>
          <ul><slot /></ul>
        </nav>
      </div>
    </Popover>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Popover } from "@/components/Popover";
import { Button } from "@/components/Button";
export default Vue.extend({
  name: "FdShellBarProductSwitcher",
  components: { Popover, Button }
});
</script>
