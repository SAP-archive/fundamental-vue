<script lang="ts">
import Vue, { CreateElement, VNode } from "vue";
import { ModeType, Config, Store } from "./Model";
import { withTargetLocation, mixins } from "@/mixins";

export default mixins(withTargetLocation("#")).extend({
  name: "FdSideNavLink",
  inject: {
    sideNavStore: { default: null },
    sideNavItem: { default: null },
    $config: { from: "config" }
  },
  computed: {
    parentItemId(): string {
      // @ts-ignore
      return this.sideNavItem.uid;
    },
    store(): Store {
      // @ts-ignore
      return this.sideNavStore;
    },
    config(): Config {
      // @ts-ignore
      return this.$config;
    },
    mode(): ModeType {
      return this.config.mode;
    },
    hasChildren(): boolean {
      return this.store.hasSubItems(this.parentItemId);
    },
    selected(): boolean {
      return this.store.selected(this.parentItemId);
    },
    classes(): object {
      return {
        "has-child": this.hasChildren,
        "is-selected": this.selected
      };
    }
  },
  render(h: CreateElement): VNode {
    const body = this.$slots.default || [];
    const renderRouterLink = () => {
      const RouterLink = Vue.component("RouterLink");
      return h(
        RouterLink,
        {
          staticClass: "fd-side-nav__link",
          class: {
            "has-child": this.hasChildren
          },
          nativeOn: {
            click: this.onRouterLinkClick
          },
          props: {
            to: this.to,
            "exact-active-class": "is-selected"
          }
        },
        body
      );
    };
    const attrs: { [key: string]: any } = {
      href: "#",
      "aria-selected": this.selected
    };
    if (this.mode === "router") {
      return renderRouterLink();
    }
    return h(
      "a",
      {
        attrs,
        class: {
          "fd-side-nav__link": true,
          ...this.classes
        },
        on: {
          click: this.onClick
        }
      },
      body
    );
  },
  methods: {
    selectSelf() {
      this.store.selectedId = this.parentItemId;
      this.store.toggleExpanded(this.parentItemId);
    },
    onRouterLinkClick(event: Event): void {
      event.preventDefault();
      event.stopPropagation();
      this.selectSelf();
    },
    onClick(event: Event): void {
      this.selectSelf();
      this.pushLocation(event);
    }
  }
});
</script>
