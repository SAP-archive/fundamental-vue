<template>
  <a class="fd-menu__item" @click="click"><slot /></a>
</template>

<script>
export default {
  name: "FdMenuLink",
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
