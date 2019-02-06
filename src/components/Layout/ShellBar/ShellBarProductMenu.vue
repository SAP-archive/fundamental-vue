<template>
  <div class="fd-product-menu">
    <Popover placement="right">
      <div slot="control">
        <Button styling="light" class="fd-product-menu__control">
          <ShellBarProductTitle class="fd-product-menu__title">
            <slot name="title"/>
          </ShellBarProductTitle>
        </Button>
      </div>
      <slot name="menu"/>
    </Popover>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Popover } from '@/components/Popover';
import { Button } from '@/components/Button';
import ShellBarProductTitle from './ShellBarProductTitle.vue';

export default Vue.extend({
  name: "FdShellBarProductMenu",
  components: { Popover, Button, ShellBarProductTitle, },
});
</script>
