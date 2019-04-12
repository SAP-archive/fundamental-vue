<template>
  <nav class="fd-side-nav">
    <slot />
  </nav>
</template>

<script>
import { Config, Store, Modes, Mode } from "./Model";

export default {
  name: "FdSideNav",
  provide() {
    return {
      sideNavStore: this.sideNavStore,
      config: new Config(this.mode)
    };
  },
  props: {
    selectedId: { type: String, default: null },
    mode: {
      default: Mode.manual,
      validator: value => Modes.indexOf(value) >= 0
    }
  },
  computed: {
    store() {
      return this.sideNavStore;
    },
    localSelectedId() {
      return this.store.selectedId;
    }
  },
  watch: {
    localSelectedId: {
      immediate: true,
      handler(newId) {
        this.store.selectedId = newId;
        this.$emit("update:selectedId", this.store.selectedId);
      }
    },
    selectedId: {
      immediate: true,
      handler(newId) {
        this.store.selectedId = newId;
      }
    }
  },
  data() {
    return {
      sideNavStore: new Store({
        selectedId: this.selectedId,
        expandedIds: [],
        items: {}
      })
    };
  }
};
</script>
