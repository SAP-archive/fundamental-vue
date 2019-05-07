<template>
  <li>
    <div v-if="canHaveAddon" class="fd-menu__addon-before">
      <slot name="addon" />
    </div>
    <FdSmartMenuInterior><slot /></FdSmartMenuInterior>
  </li>
</template>

<script>
import FdMenuLink from "./MenuLink.vue";
const FdSmartMenuInterior = {
  functional: true,
  components: { FdMenuLink },
  render(h, context) {
    const { children, data, scopedSlots } = context;
    const [onlyChild] = children;
    if (children.length === 1 && onlyChild.tag == null) {
      return h(FdMenuLink, data, children);
    }
    return scopedSlots.default();
  }
};
export default {
  name: "FdMenuItem",
  components: { FdSmartMenuInterior },
  provide() {
    return { menuItem: this };
  },
  inject: {
    menuList: { default: null },
    menu: { default: null }
  },
  props: {
    selected: { type: Boolean, default: false },
    value: { default: null, type: [String, Number] }
  },
  computed: {
    canHaveAddon() {
      return this.menu == null ? false : this.menu.canHaveAddon;
    }
  },
  methods: {
    onClick() {
      const list = this.menuList;
      if (list != null) {
        list.menuItemDidClick(this);
      }
      this.$emit("click");
    }
  }
};
</script>
