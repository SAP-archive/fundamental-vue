<template>
  <a
    v-if="manualModeEnabled"
    href="#"
    :aria-selected="ariaSelected"
    class="fd-side-nav__sublink"
    :class="classes"
    @click.prevent.stop="onClick"
  >
    <slot />
  </a>
  <router-link
    v-else
    class="fd-side-nav__sublink"
    :aria-selected="ariaSelected"
    @click="onRouterLinkClick"
    :to="to"
    exact-active-class="is-selected"
  >
    <slot />
  </router-link>
</template>

<script>
import { withTargetLocation } from "@/mixins";
import { Store, ModeType, Config } from "./Model";

// TODO: Refactor so that SideNavSubLink uses SideNavLink
export default {
  name: "FdSideNavSubLink",
  mixins: [withTargetLocation("#")],
  inject: {
    sideNavStore: { default: null },
    sideNavSubItem: { default: null },
    $config: { from: "config" }
  },
  computed: {
    ariaSelected() {
      return this.selected ? "true" : null;
    },
    selected() {
      return this.store.selected(this.parentId);
    },
    classes() {
      return { "is-selected": this.selected };
    },
    store() {
      return this.sideNavStore;
    },
    parentId() {
      return this.sideNavSubItem.uid;
    },
    config() {
      // @ts-ignore
      return this.$config;
    },
    manualModeEnabled() {
      return this.mode === "manual";
    },
    mode() {
      return this.config.mode;
    }
  },
  methods: {
    onRouterLinkClick() {
      this.store.selectedId = this.parentId;
      this.pushLocation();
    },
    onClick(event) {
      event.preventDefault();
      event.stopPropagation();
      this.store.selectedId = this.parentId;
      this.pushLocation();
    }
  }
};
</script>
