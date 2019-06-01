<template>
  <!-- mousedown.prevent has to be used here. Otherwise this would have blur events to be fired. -->
  <li @mousedown.prevent @click="onClick">
    <div v-if="canHaveAddon" class="fd-menu__addon-before">
      <slot name="addon" />
    </div>
    <FdSmartMenuInterior><slot /></FdSmartMenuInterior>
  </li>
</template>

<script>
import FdMenuLink from "./MenuLink.vue";
import Uid from "./../../mixins/Uid";

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
  mixins: [Uid],
  components: { FdSmartMenuInterior },
  provide() {
    return {
      menuItem: this
    };
  },
  inject: ["menu", "menuList"],
  created() {
    const { menu } = this;
    menu.registerMenuItem(this);
  },
  beforeDestroy() {
    const { menu } = this;
    menu.unregisterMenuItem(this);
  },
  props: {
    selected: { type: Boolean, default: false },
    value: { default: null, type: [String, Number] }
  },
  computed: {
    canHaveAddon() {
      return this.menuList.canHaveAddon;
    }
  },
  methods: {
    onClick(event) {
      this.menuList.menuItemDidClick(this, event);
      this.$emit("click", this.value, event);
    }
  }
};
</script>
