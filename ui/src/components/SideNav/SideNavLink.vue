<template>
  <a
    v-if="manualModeEnabled"
    href="#"
    :aria-selected="ariaSelected"
    class="fd-side-nav__link"
    :class="classes"
    @click.prevent.stop="onClick"
  >
    <slot />
  </a>
  <router-link
    v-else
    class="fd-side-nav__link"
    :aria-selected="ariaSelected"
    :class="routerLinkClasses"
    @click="onRouterLinkClick"
    :to="to"
    exact-active-class="is-selected"
  >
    <slot />
  </router-link>
</template>

<script>
import { ModeType, Config, Store } from "./Model";
import { withTargetLocation, mixins } from "@/mixins";
export default {
  name: "FdSideNavLink",
  mixins: [withTargetLocation("#")],
  inject: {
    sideNavStore: { default: null },
    sideNavItem: { default: null },
    $config: { from: "config" }
  },
  computed: {
    ariaSelected() {
      return this.selected ? "true" : null;
    },
    parentItemId() {
      return this.sideNavItem.uid;
    },
    store() {
      return this.sideNavStore;
    },
    config() {
      return this.$config;
    },
    manualModeEnabled() {
      return this.mode === "manual";
    },
    mode() {
      return this.config.mode;
    },
    hasChildren() {
      return this.store.hasSubItems(this.parentItemId);
    },
    selected() {
      return this.store.selected(this.parentItemId);
    },
    routerLinkClasses() {
      return {
        "has-child": this.hasChildren
      };
    },
    classes() {
      return {
        "has-child": this.hasChildren,
        "is-selected": this.selected
      };
    }
  },
  methods: {
    selectSelf() {
      this.store.selectedId = this.parentItemId;
      this.store.toggleExpanded(this.parentItemId);
    },
    onRouterLinkClick() {
      this.selectSelf();
      this.pushLocation();
    },
    onClick(event) {
      event.preventDefault();
      event.stopPropagation();
      this.selectSelf();
      this.pushLocation();
    }
  }
};
</script>
