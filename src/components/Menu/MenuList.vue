<template>
  <div v-if="header != null" class="fd-menu__group">
    <h1 class="fd-menu__title">{{header}}</h1>
    <ul class="fd-menu__list" :class="menuListClasses">
      <slot/>
    </ul>
  </div>
  <ul v-else class="fd-menu__list" :class="menuListClasses">
    <slot/>
  </ul>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "FdMenuList",
  provide() {
    return {
      menuList: this
    };
  },
  inject: {
    menu: { default: null }
  },
  props: {
    header: { type: String, default: null },
    separated: { type: Boolean, default: false }
  },
  computed: {
    menuListClasses(): object {
      return {
        "fd-menu__list--separated": this.separated
      };
    }
  },
  methods: {
    menuItemDidClick(item: any /* MenuItem */): void {
      this.$emit("select", item.value);
      // @ts-ignore
      const menu = this.menu;
      if (menu) {
        menu.menuItemDidClick(item);
      }
    }
  },
});
</script>
