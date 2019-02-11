<template>
  <a
    @click.prevent="onClick"
    href="#"
    class="fd-side-nav__sublink"
    :class="classes"
    :aria-selected="selected"
  >
    <slot />
  </a>
</template>

<script lang="ts">
import { Store } from "./Model";
import { withTargetLocation, mixins } from "@/mixins";

// TODO: Refactor so that SideNavSubLink uses SideNavLink
export default mixins(withTargetLocation("#")).extend({
  name: "FdSideNavSubLink",
  inject: ["sideNavStore", "sideNavSubItem"],
  computed: {
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
    }
  },
  methods: {
    onClick(event: Event): void {
      event.preventDefault();
      event.stopPropagation();
      this.store.selectedId = this.parentId;
      this.pushLocationIfPossible();
    }
  }
});
</script>
