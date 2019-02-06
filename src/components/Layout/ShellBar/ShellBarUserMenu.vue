<template>
  <div class="fd-user-menu">
    <Popover placement="right">
      <div class="fd-user-menu__control" slot="control" title="Experimental">
        <slot name="control">
          <Identifier size="s" backgroundColor="accent-6" circle icon="person-placeholder" />
        </slot>
      </div>
      <slot/>
    </Popover>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Popover } from '@/components/Popover';
import { Identifier } from '@/components/Identifier';

export default Vue.extend({
  name: "FdShellBarUserMenu",
  components: { Identifier, Popover, },
});
</script>
