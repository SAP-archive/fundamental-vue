<template>
  <fd-button styling="light" v-bind="$attrs" v-on="$listeners"><slot /></fd-button>
</template>

<script>
import FdButton from "./../Button/Button.vue";

export default {
  name: "FdInputGroupButton",
  components: { FdButton },
  inject: ["$_fdInputGroupAddon"],
  mounted() {
    this.$_fdInputGroupAddon.hasButton = true;
  }
};
</script>
