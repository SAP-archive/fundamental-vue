<script>
export default {
  name: "FdTabs",
  provide() {
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
      get() {
        return this.store.activeName;
      },
      set(newName) {
        this.store.activeName = newName;
      }
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(newValue) {
        this.activeName = newValue;
      }
    }
  },
  methods: {
    onTabItemKeyup(event, item) {
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

    activateTabItem(item) {
      // Ignore disabled items
      if (item.disabled) {
        return;
      }
      this.activeName = item.name;
      this.$emit("input", item.name);
    },
    // TabItemContainer Implementation
    addTabItem(item) {
      const index = (this.$slots.default || []).indexOf(item.$vnode);
      this.tabItems.splice(index, 0, item);
    },
    removeTabItem(item) {
      const tabItems = this.tabItems;
      const index = tabItems.indexOf(item);
      if (index > -1) {
        tabItems.splice(index, 1);
      }
    }
  },
  data() {
    return {
      store: {
        activeName: ""
      },
      tabItems: []
    };
  },
  render(h) {
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
};
</script>
