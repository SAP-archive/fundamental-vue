<template>
  <nav :class="classes">
    <slot />
  </nav>
</template>

<script>
export default {
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
    classes() {
      return {
        "fd-menu": true,
        "fd-menu--addon-before": this.canHaveAddon
      };
    }
  },
  methods: {
    menuItemDidClick(item, event) {
      this.$emit("select", item, event);
    }
  }
};
</script>
