<script lang="ts">
import Vue, { CreateElement, VNode } from "vue";
import { ModeType, Config, Store } from "./Model";
import { warn } from "@/core";

export default Vue.extend({
  name: "FdSideNavLink",
  inject: {
    sideNavStore: { default: null },
    sideNavItem: { default: null },
    $config: { from: "config" }
  },
  props: {
    to: {
      type: [Object, String],
      default: "#"
    }
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
    const attrs: { [key: string]: any } = {
      href: "#",
      "aria-selected": this.selected
    };
    if (this.mode === "router") {
      attrs["exact-active-class"] = "is-selected";
    }
    const body = this.$slots.default || [];
    return h(
      "a",
      {
        attrs,
        class: {
          "fd-side-nav__link": true,
          ...this.classes
        },
        on: {
          click: this.onClick,
        },
      },
      body
    );
  },
  methods: {
    onClick(event: Event): void {
      event.preventDefault();
      event.stopPropagation();
      this.store.selectedId = this.parentItemId;
      this.store.toggleExpanded(this.parentItemId);

      const { to, $router } = (this as any);
      if (to != null) {
        if ($router != null) {
          $router.push(to);
        } else {
          warn(`Tried to navigate to ${to} but $router not found.`);
        }
      }
      this.$emit("click", this);
    }
  }
});
</script>
