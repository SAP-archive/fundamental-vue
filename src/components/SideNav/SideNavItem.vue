<template>
  <li class="fd-side-nav__item">
    <slot />
  </li>
</template>

<script>
import { Uid } from "./../../mixins";

export default {
  name: "FdSideNavItem",
  mixins: [Uid],
  provide() {
    return {
      sideNavItem: this
    };
  },
  inject: ["sideNavStore"],
  mounted() {
    this.store.registerItem(this.itemId);
  },
  beforeDestroy() {
    this.store.unregisterItem(this.itemId);
  },
  computed: {
    itemId() {
      return this.uid;
    },
    store() {
      return this.sideNavStore;
    }
  }
};
</script>
