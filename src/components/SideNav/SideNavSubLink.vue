<template>
  <a
    @click.prevent="onClick"
    href="#"
    class="fd-side-nav__sublink"
    :class="classes"
    :aria-selected="selected"
  ><slot /></a>
</template>

<script lang="ts">
import Vue from "vue";
import { Store } from "./Model";
import { warn } from "@/core";

export default Vue.extend({
  name: "FdSideNavSubLink",
  inject: ["sideNavStore", "sideNavSubItem"],
  props: {
    to: {
      type: [Object, String],
      default: "#"
    }
  },
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
      const { to, $router } = this;
      if (to != null) {
        if ($router != null) {
          $router.push(to);
        } else {
          warn(`Tried to navigate to ${to} but $router not found.`);
        }
      }
      this.$emit("click", this);
    }
  }
});
</script>
