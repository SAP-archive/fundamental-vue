<template>
  <span class="fd-input-group__addon" :class="classes"><slot /></span>
</template>

<script>
// Use this in before-/after-slots within fd-input-groups.
export default {
  name: "FdInputGroupAddon",
  inject: {
    $_fdInputGroupAddonContext: { default: null }
  },
  provide() {
    return {
      $_fdInputGroupAddon: this
    };
  },
  data() {
    return {
      hasButton: false
    };
  },
  computed: {
    addonContext() {
      return this.$_fdInputGroupAddonContext;
    },
    classes() {
      return {
        "fd-input-group__addon--button": this.hasButton,
        "fd-input-group__addon--before": this.addonContext === "before",
        "fd-input-group__addon--after": this.addonContext === "after"
      };
    }
  }
};
</script>
