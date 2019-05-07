<template>
  <a class="fd-menu__item" :class="classes" @click="click"><slot /></a>
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
  },
  inject: {
    menuItem: { default: null }
  },
  methods: {
    click() {
      const item = this.menuItem;
      if (item != null) {
        item.onClick();
      } else {
        this.$emit("click");
      }
    }
  }
};
</script>
