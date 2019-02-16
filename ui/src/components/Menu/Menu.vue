<template>
  <nav :class="classes">
    <slot />
  </nav>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "FdMenu",
  provide() {
    return {
      menu: this
    };
  },
  props: {
    canHaveAddon: { type: Boolean, default: false }
  },
  computed: {
    classes(): object {
      return {
        "fd-menu": true,
        "fd-menu--addon-before": this.canHaveAddon
      };
    }
  },
  methods: {
    menuItemDidClick(item: any /* MenuItem */) {
      this.$emit("select", item);
    }
  }
});
</script>
