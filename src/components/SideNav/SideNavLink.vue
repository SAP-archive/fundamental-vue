<template>
  <router-link
    v-if="asRouterLink"
    class="fd-side-nav__link"
    :aria-selected="String(selected)"
    :aria-expanded="String(isExpaned)"
    :class="routerLinkClasses"
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
    :aria-expanded="String(isExpaned)"
    class="fd-side-nav__link"
    :class="classes"
    @click.stop.prevent="selectSelf"
  >
    <slot />
  </a>
</template>

<script>
import { normalizedChildren, normalizedId } from "./Model/normalize-items";

export default {
  name: "FdSideNavLink",
  props: {
    asRouterLink: {
      type: Boolean,
      default: false
    }
  },
  inheritAttrs: false,
  inject: ["fdItemProvider", "sideNavStore"],
  computed: {
    item() {
      return this.fdItemProvider.item;
    },
    itemId() {
      return normalizedId(this.item);
    },
    childItems() {
      return normalizedChildren(this.item);
    },
    expandable() {
      return this.childItems.length > 0;
    },
    isExpaned() {
      return this.store.itemWithIdIsExpanded(this.itemId);
    },
    store() {
      return this.sideNavStore;
    },
    selected() {
      return this.store.itemWithIdIsSelected(this.itemId);
    },
    routerLinkClasses() {
      return {
        "has-child": this.expandable
      };
    },
    classes() {
      return {
        "has-child": this.expandable,
        "is-selected": this.selected
      };
    }
  },
  methods: {
    selectSelf() {
      this.store.selectedId = this.itemId;
      if (this.expandable) {
        this.store.toggleExpandedForItemWithId(this.itemId);
      }
    }
  }
};
</script>
