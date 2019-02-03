<template>
  <li class="fd-side-nav__subitem">
    <slot/>
  </li>
</template>

<script lang="ts">
import { Store } from "./Model";
import { Uid, mixins } from "@/mixins2";

export default mixins(Uid).extend({
  name: "FdSideNavSubItem",
  provide(): object {
    return {
      sideNavSubItem: this
    };
  },
  inject: ["sideNavStore", "sideNavItem"],
  mounted(): void {
    this.store.registerSubItem({
      itemId: this.uid,
      parentId: this.parentId
    });
  },
  beforeDestroy(): void {
    this.store.unregisterItem(this.uid);
  },
  computed: {
    store(): Store {
      // @ts-ignore
      return this.sideNavStore;
    },
    parentId(): string {
      // @ts-ignore
      return this.sideNavItem.uid;
    }
  }
});
</script>
