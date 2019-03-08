<template>
  <li class="fd-side-nav__item">
    <slot />
  </li>
</template>

<script lang="ts">
import { Store } from "./Model";
import { Uid, mixins } from "@/mixins";

export default mixins(Uid).extend({
  name: "FdSideNavItem",
  provide(): object {
    return {
      sideNavItem: this
    };
  },
  inject: ["sideNavStore"],
  mounted(): void {
    this.store.registerItem(this.itemId);
  },
  beforeDestroy(): void {
    this.store.unregisterItem(this.itemId);
  },
  computed: {
    itemId(): string {
      return this.uid;
    },
    store(): Store {
      // @ts-ignore
      return this.sideNavStore;
    }
  }
});
</script>
