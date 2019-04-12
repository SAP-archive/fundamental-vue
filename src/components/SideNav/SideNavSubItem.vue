<template>
  <li class="fd-side-nav__subitem">
    <slot />
  </li>
</template>

<script>
import { Uid } from "./../../mixins";

export default {
  name: "FdSideNavSubItem",
  mixins: [Uid],
  provide() {
    return {
      sideNavSubItem: this
    };
  },
  inject: ["sideNavStore", "sideNavItem"],
  mounted() {
    this.store.registerSubItem({
      itemId: this.uid,
      parentId: this.parentId
    });
  },
  beforeDestroy() {
    this.store.unregisterItem(this.uid);
  },
  computed: {
    store() {
      return this.sideNavStore;
    },
    parentId() {
      return this.sideNavItem.uid;
    }
  }
};
</script>
