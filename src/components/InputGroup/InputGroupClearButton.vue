<template>
  <!-- the inline style is a workaround and should be removed -->
  <!-- once it has been fixed in fund. styles. -->
  <button
    class="fd-input-group__button fd-input-group__button--clear"
    style="z-index: 2;"
    aria-label="Clear"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "FdInputGroupClearButton",
  inject: ["$_fdInputGroupAddon"],
  mounted() {
    this.$_fdInputGroupAddon.hasButton = true;
  }
};
</script>
