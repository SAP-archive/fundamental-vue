<template>
  <nav class="fd-side-nav">
    <slot />
  </nav>
</template>

<script>
export default {
  name: "FdSideNav",
  provide() {
    return {
      sideNavStore: this.sideNavStore
    };
  },
  props: {
    selectedId: { type: String, default: null }
  },
  computed: {
    expandedIds: {
      set(expandedIds) {
        this.sideNavStore.expandedIds = expandedIds;
      },
      get() {
        return this.sideNavStore.expandedIds;
      }
    },
    store() {
      return this.sideNavStore;
    },
    selectedId_: {
      set(newValue) {
        this.store.selectedId = newValue;
      },
      get() {
        return this.store.selectedId;
      }
    }
  },
  methods: {
    itemWithIdIsExpanded(id) {
      return this.expandedIds.indexOf(id) >= 0;
    },
    itemWithIdIsSelected(id) {
      return id === this.selectedId_;
    },
    expandItemWithId(id) {
      this.expandedIds = [...this.expandedIds, id];
    },
    collapseItemWithId(id) {
      this.expandedIds = [...this.expandedIds.filter(expandedId => expandedId !== id)];
    },
    toggleExpandedForItemWithId(itemId) {
      const { expandedIds } = this;
      const needsToBeExpanded = expandedIds.indexOf(itemId) < 0;
      needsToBeExpanded ? this.expandItemWithId(itemId) : this.collapseItemWithId(itemId);
    }
  },
  watch: {
    selectedId: {
      immediate: true,
      handler(newId) {
        this.selectedId_ = newId;
      }
    }
  },
  data() {
    return {
      sideNavStore: {
        toggleExpandedForItemWithId: this.toggleExpandedForItemWithId,
        expandedIds: [],
        selectedId: this.selectedId_,
        itemWithIdIsExpanded: this.itemWithIdIsExpanded,
        itemWithIdIsSelected: this.itemWithIdIsSelected
      }
    };
  }
};
</script>
