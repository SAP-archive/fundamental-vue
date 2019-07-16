<template>
  <div :id="uid" role="tabpanel" class="fd-tabs__panel" :aria-expanded="ariaExpanded">
    <slot />
  </div>
</template>

<script>
import { Uid } from "./../../mixins";

export default {
  name: "FdTabItem",
  mixins: [Uid],
  inject: {
    store: { default: null },
    tabs: { default: null }
  },
  props: {
    label: { type: String, default: null },
    name: { type: String, default: null },
    disabled: { type: Boolean, default: false }
  },
  computed: {
    ariaExpanded() {
      return this.active ? "true" : "false";
    },
    active() {
      return this.activeName === this.name;
    },
    activeName: {
      get() {
        return this.store.activeName;
      },
      set(newName) {
        this.store.activeName = newName;
      }
    }
  },
  mounted() {
    const { tabs } = this;
    if (tabs != null) {
      tabs.addTabItem(this);
    }
  },
  destroyed() {
    const { tabs } = this;
    if (tabs != null) {
      tabs.removeTabItem(this);
    }
  },
  methods: {
    renderItem(current) {
      const active = current === this.name;
      const h = this.$createElement;
      const link = h(
        "a",
        {
          class: "fd-tabs__link",
          attrs: {
            "aria-controls": this.uid,
            "aria-selected": active,
            "aria-disabled": this.disabled,
            role: "tab",
            tabIndex: 0
          },
          on: {
            click: this.onClick,
            keyup: this.onKeyup
          }
        },
        this.label
      );

      return h(
        "li",
        {
          class: "fd-tabs__item"
        },
        [link]
      );
    },
    onClick(event) {
      event.preventDefault();

      this.tabs != null && this.tabs.activateTabItem(this);
    },
    onKeyup(event) {
      this.tabs != null && this.tabs.onTabItemKeyup(event, this);
    }
  }
};
</script>
