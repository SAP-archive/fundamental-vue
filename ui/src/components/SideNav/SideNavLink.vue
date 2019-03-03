<template>
  <router-link
    v-if="mode === 'router'"
    class="fd-side-nav__link"
    :class="routerLinkClasses"
    exact-active-class="is-selected"
    :to="to"
    @click.native.prevent.stop="selectSelf"
    ><slot
  /></router-link>
  <a
    v-else
    href="#"
    class="fd-side-nav__link"
    :class="anchorClasses"
    :aria-selected="selected ? 'true' : null"
    @click="onClick"
    ><slot
  /></a>
</template>

<script lang="ts">
import Vue, { VNode } from "vue";
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
    anchorClasses(): object {
      return {
        "has-child": this.hasChildren,
        "is-selected": this.selected
      };
    },
    routerLinkClasses(): object {
      return {
        "has-child": this.hasChildren
      };
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
    mode(): ModeType {
      return this.config.mode;
    },
    hasChildren(): boolean {
      return this.store.hasSubItems(this.parentItemId);
    },
    selected(): boolean {
      return this.store.selected(this.parentItemId);
    }
  },
  methods: {
    selectSelf() {
      this.store.selectedId = this.parentItemId;
      this.store.toggleExpanded(this.parentItemId);
    },
    onClick(event: Event): void {
      this.selectSelf();
      this.pushLocation(event);
    }
  }
});
</script>
