<template>
  <ul class="fd-side-nav__sublist" :aria-hidden="currentHidden">
    <slot />
  </ul>
</template>

<script lang="ts">
import Vue from "vue";
import { Store } from "./Model";

export default Vue.extend({
  name: "FdSideNavSubList",
  inject: ["sideNavStore", "sideNavItem"],
  props: {
    hidden: { type: Boolean, default: null }
  },
  computed: {
    store(): Store {
      // @ts-ignore
      return this.sideNavStore;
    },
    parentId(): string {
      // @ts-ignore
      return this.sideNavItem.itemId;
    },
    currentHidden(): boolean {
      const hidden = this.hidden;
      if (hidden != null) {
        return hidden;
      }
      return !this.store.expanded(this.parentId);
    }
  }
});
</script>
