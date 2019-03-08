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

<script lang="ts">
import { withTargetLocation, mixins } from "@/mixins";
import { Store, ModeType, Config } from "./Model";

// TODO: Refactor so that SideNavSubLink uses SideNavLink
export default mixins(withTargetLocation("#")).extend({
  name: "FdSideNavSubLink",
  inject: {
    sideNavStore: { default: null },
    sideNavSubItem: { default: null },
    $config: { from: "config" }
  },
  computed: {
    ariaSelected() {
      return this.selected ? "true" : null;
    },
    selected(): boolean {
      return this.store.selected(this.parentId);
    },
    classes(): object {
      return { "is-selected": this.selected };
    },
    store(): Store {
      // @ts-ignore
      return this.sideNavStore;
    },
    parentId(): string {
      // @ts-ignore
      return this.sideNavSubItem.uid;
    },
    config(): Config {
      // @ts-ignore
      return this.$config;
    },
    manualModeEnabled(): boolean {
      return this.mode === "manual";
    },
    mode(): ModeType {
      return this.config.mode;
    }
  },
  methods: {
    onRouterLinkClick(event: Event): void {
      this.store.selectedId = this.parentId;
      this.pushLocation();
    },
    onClick(event: Event): void {
      event.preventDefault();
      event.stopPropagation();
      this.store.selectedId = this.parentId;
      this.pushLocation();
    }
  }
});
</script>
