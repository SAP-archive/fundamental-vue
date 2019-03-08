<script lang="ts">
import Vue from "vue";
import TabItem from "./TabItem.vue";
import { CreateElement, VNode } from "vue";

type TabItemType = InstanceType<typeof TabItem>;

const Store = Vue.extend({
  data: () => ({
    activeName: "" as string | null
  })
});

export default Vue.extend({
  name: "FdTabs",
  provide(): object {
    return {
      tabs: this,
      store: this.store
    };
  },
  props: {
    value: String
  },
  computed: {
    activeName: {
      get(): string | null {
        return this.store.activeName;
      },
      set(newName: string | null): void {
        this.store.activeName = newName;
      }
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(newValue: string | null) {
        this.activeName = newValue;
      }
    }
  },
  methods: {
    onTabItemKeyup(event: KeyboardEvent, item: TabItemType) {
      if (event.defaultPrevented) {
        return;
      }

      // key is not supported everywhere (edge) this we check both values.
      const key = event.key || event.keyCode;
      const isEnter = key === "Enter" || key === /* enter */ 13;
      if (isEnter) {
        this.activateTabItem(item);
        event.preventDefault();
      }
    },

    activateTabItem(item: TabItemType) {
      // Ignore disabled items
      if (item.disabled) {
        return;
      }
      this.activeName = item.name;
      this.$emit("input", item.name);
    },
    // TabItemContainer Implementation
    addTabItem(item: TabItemType) {
      const index = (this.$slots.default || []).indexOf(item.$vnode);
      this.tabItems.splice(index, 0, item);
    },
    removeTabItem(item: TabItemType) {
      const tabItems = this.tabItems;
      const index = tabItems.indexOf(item);
      if (index > -1) {
        tabItems.splice(index, 1);
      }
    }
  },
  data() {
    return {
      store: new Store(),
      tabItems: [] as TabItemType[]
    };
  },
  render(h: CreateElement): VNode {
    const activeName = this.activeName || "";
    const tabItems = this.tabItems.map(tabItem => {
      return tabItem.renderItem(activeName);
    });
    const tabList = h(
      "ul",
      {
        class: "fd-tabs",
        attrs: { role: "tablist" }
      },
      tabItems
    );
    return h("div", {}, [tabList, this.$slots.default]);
  }
});
</script>
