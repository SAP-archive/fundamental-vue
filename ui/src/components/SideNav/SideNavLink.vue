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

<script lang="ts">
import Vue, { CreateElement, VNode } from "vue";
import { ModeType, Config, Store } from "./Model";
import { withTargetLocation, mixins } from "@/mixins";

export default mixins(withTargetLocation("#")).extend({
  name: "FdSideNavLink",
  inject: {
    sideNavStore: { default: null },
    sideNavItem: { default: null },
    $config: { from: "config" }
  },
  computed: {
    ariaSelected() {
      return this.selected ? "true" : null;
    },
    parentItemId(): string {
      // @ts-ignore
      return this.sideNavItem.uid;
    },
    store(): Store {
      // @ts-ignore
      return this.sideNavStore;
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
    },
    hasChildren(): boolean {
      return this.store.hasSubItems(this.parentItemId);
    },
    selected(): boolean {
      return this.store.selected(this.parentItemId);
    },
    routerLinkClasses() {
      return {
        "has-child": this.hasChildren
      };
    },
    classes(): object {
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
    onRouterLinkClick(): void {
      this.selectSelf();
      this.pushLocation();
    },
    onClick(event: Event): void {
      event.preventDefault();
      event.stopPropagation();
      this.selectSelf();
      this.pushLocation();
    }
  }
});
</script>
