<script lang="ts">
import Vue from "vue";
import TabItem from "./TabItem.vue";
type TabItemType = InstanceType<typeof TabItem>;

// Use these types in order to cast your props. Delete if not needed.
// import { PropValidator } from "vue/types/options";
// import { Prop } from "vue/types/options";
import { CreateElement, VNode } from "vue";

const Store = Vue.extend({
  data() {
    return {
      activeName: "" as string | null
    };
  }
});

type StoreInstance = InstanceType<typeof Store>;
declare module "vue/types/vue" {
  interface Vue {
    $tabsStore: StoreInstance;
  }
}

export default Vue.extend({
  name: "FdTabs",
  beforeCreate() {
    this.$tabsStore = new Store();
  },
  provide() {
    return {
      tabs: this,
      store: this.$tabsStore
    };
  },
  props: {
    value: String
  },
  computed: {
    activeName: {
      get(): string | null {
        return this.$tabsStore.activeName;
      },
      set(newName: string | null): void {
        this.$tabsStore.activeName = newName;
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

    //  <div>
    //         <ul class='fd-tabs' role='tablist'>

    //           {tabItems.map(tabItem => {
    //             return tabItem.renderItem(this.activeName || '');
    //           })}
    //         </ul>
    //         {this.$slots.default}
    //       </div>
  }
});
</script>
