<template>
  <div
    :id="uid"
    role="tabpanel"
    class="fd-tabs__panel"
    :aria-expanded="ariaExpanded"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { Uid, mixins } from "@/mixins";
import { PropValidator } from "vue/types/options";

export default mixins(Uid).extend({
  name: "FdTabItem",
  inject: {
    store: { default: null },
    tabs: { default: null }
  },
  props: {
    label: { type: String, default: null } as PropValidator<string | null>,
    name: { type: String, default: null } as PropValidator<string | null>,
    disabled: { type: Boolean, default: false } as PropValidator<Boolean>
  },
  computed: {
    ariaExpanded(): string {
      return this.active ? "true" : "false";
    },
    active(): boolean {
      return this.activeName === this.name;
    },
    activeName: {
      get(): string | null {
        // @ts-ignore
        return this.store.activeName;
      },
      set(newName: string | null) {
        // @ts-ignore
        this.store.activeName = newName;
      }
    }
  },
  mounted(): void {
    // @ts-ignore
    const { tabs } = this;
    if (tabs != null) {
      tabs.addTabItem(this);
    }
  },
  destroyed(): void {
    // @ts-ignore
    const { tabs } = this;
    if (tabs != null) {
      tabs.removeTabItem(this);
    }
  },
  methods: {
    renderItem(current: string) {
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
    onClick(event: Event) {
      event.preventDefault();
      // @ts-ignore
      this.tabs != null && this.tabs.activateTabItem(this);
    },
    onKeyup(event: KeyboardEvent) {
      // @ts-ignore
      this.tabs != null && this.tabs.onTabItemKeyup(event, this);
    }
  }
});
</script>
