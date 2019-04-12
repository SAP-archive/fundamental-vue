<template>
  <ul class="fd-side-nav__sublist" :aria-hidden="currentHidden">
    <slot />
  </ul>
</template>

<script>
export default {
  name: "FdSideNavSubList",
  inject: ["sideNavStore", "sideNavItem"],
  props: {
    hidden: { type: Boolean, default: null }
  },
  computed: {
    store() {
      return this.sideNavStore;
    },
    parentId() {
      return this.sideNavItem.itemId;
    },
    currentHidden() {
      const hidden = this.hidden;
      if (hidden != null) {
        return hidden;
      }
      return !this.store.expanded(this.parentId);
    }
  }
};
</script>
