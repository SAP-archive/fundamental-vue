<template>
  <a class="fd-menu__item" :class="classes"><slot /></a>
</template>

<script>
export default {
  name: "FdMenuLink",
  props: {
    selected: { type: Boolean, default: false }
  },
  computed: {
    classes() {
      return this.selected ? "is-selected" : null;
    }
  }
};
</script>
