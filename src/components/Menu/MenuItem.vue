<template>
  <li>
    <div v-if="canHaveAddon" class="fd-menu__addon-before">
      <slot name="addon" />
    </div>
    <slot v-if="hasCustomAnchor" />
    <a v-else href="#" class="fd-menu__item" @click.prevent="onClick">
      <slot />
    </a>
  </li>
</template>

<script lang="ts">
import Vue, { VNode } from "vue";

const isAnchorNode = ({ tag }: VNode) => tag === "a";
const findAnchor = (nodes: VNode[]): VNode | undefined => {
  for (const node of nodes) {
    if (isAnchorNode(node)) {
      return node;
    }
    const anchorInChildren = findAnchor(node.children || []);
    if (anchorInChildren !== undefined) {
      return anchorInChildren;
    }
  }
};
export default Vue.extend({
  name: "FdMenuItem",
  inject: {
    menuList: { default: null },
    menu: { default: null }
  },
  props: {
    value: { default: null, type: [String, Number] }
  },
  computed: {
    canHaveAddon(): boolean {
      // @ts-ignore
      const menu = this.menu;
      return menu == null ? false : menu.canHaveAddon;
    },
    customAnchor(): VNode | undefined {
      return findAnchor(this.$slots.default || []);
    },
    hasCustomAnchor(): boolean {
      return this.customAnchor !== undefined;
    }
  },
  watch: {
    customAnchor: {
      immediate: true,
      handler(newAnchor: VNode | null) {
        if (this.hasCustomAnchor && newAnchor != null) {
          this.prepareCustomAnchor(newAnchor);
        }
      }
    }
  },
  methods: {
    onClick(): void {
      // @ts-ignore
      const list = this.menuList;
      if (list != null) {
        list.menuItemDidClick(this);
      }
      this.$emit("click");
    },
    prepareCustomAnchor(anchor: VNode): void {
      const data = anchor.data || {};
      const classes = data.class || {};
      data.class = {
        ...classes,
        "fd-menu__item": true
      };
      const handler = this.onClick;
      const on = { click: handler, ...(data.on || {}) };
      data.on = on;
      anchor.data = data;
    }
  }
});
</script>
