<template>
  <router-link
    v-if="asRouterLink"
    class="fd-side-nav__sublink"
    exact-active-class="is-selected"
    v-bind="$attrs"
    @click.native="selectSelf"
  >
    <slot />
  </router-link>
  <a
    v-else
    href="#"
    :aria-selected="String(selected)"
    class="fd-side-nav__sublink"
    :class="classes"
    @click.prevent.stop="selectSelf"
  >
    <slot />
  </a>
</template>

<script>
import { normalizedId } from "./Model/normalize-items";

// TODO: Refactor so that SideNavSubLink uses SideNavLink
export default {
  name: "FdSideNavSubLink",
  inject: {
    fdSubItemProvider: { default: null },
    sideNavStore: { default: null }
  },
  props: {
    asRouterLink: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    subItem() {
      return this.fdSubItemProvider.subItem;
    },
    selected() {
      return this.store.itemWithIdIsSelected(this.subItemId);
    },
    classes() {
      return { "is-selected": this.selected };
    },
    store() {
      return this.sideNavStore;
    },
    subItemId() {
      return normalizedId(this.subItem);
    }
  },
  methods: {
    selectSelf() {
      this.store.selectedId = this.subItemId;
    }
  }
};
</script>
