<template>
  <nav class="fd-side-nav">
    <slot />
  </nav>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Config, Store, Modes, Mode, ModeType } from "./Model";

export default Vue.extend({
  name: "FdSideNav",
  provide(): object {
    return {
      sideNavStore: this.sideNavStore,
      config: new Config(this.mode)
    };
  },
  props: {
    selectedId: { type: String, default: null } as PropOptions<string | null>,
    mode: {
      default: Mode.manual,
      validator: (value: any) => Modes.indexOf(value) >= 0
    } as PropOptions<ModeType>
  },
  computed: {
    store(): Store {
      // @ts-ignore
      return this.sideNavStore;
    },
    localSelectedId(): string | null {
      return this.store.selectedId;
    }
  },
  watch: {
    localSelectedId: {
      immediate: true,
      handler(newId: string | null) {
        this.store.selectedId = newId;
        this.$emit("update:selectedId", this.store.selectedId);
      }
    },
    selectedId: {
      immediate: true,
      handler(newId: string | null) {
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
});
</script>
