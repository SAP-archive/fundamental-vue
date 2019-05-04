<template>
  <div v-if="header != null" class="fd-menu__group">
    <h1 class="fd-menu__title">{{ header }}</h1>
    <ul class="fd-menu__list" :class="menuListClasses">
      <slot />
    </ul>
  </div>
  <ul v-else class="fd-menu__list" :class="menuListClasses">
    <slot />
  </ul>
</template>

<script>
export default {
  name: "FdMenuList",
  provide() {
    return {
      menuList: this
    };
  },
  inject: ["menu"],
  props: {
    header: { type: String, default: null },
    separated: { type: Boolean, default: false }
  },
  computed: {
    canHaveAddon() {
      return this.menu.canHaveAddon;
    },
    menuListClasses() {
      return {
        "fd-menu__list--separated": this.separated
      };
    }
  },
  methods: {
    menuItemDidClick(item /* MenuItem */, event) {
      this.menu.menuItemDidClick(item, event);
      this.$emit("select", item.value, event);
    }
  }
};
</script>
