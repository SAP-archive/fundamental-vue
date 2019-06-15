<template>
  <component
    key-field="fd__id"
    style="height: 100%;"
    :is="dynamicScrollerComponent"
    :min-item-size="minItemSize"
    :items="normalizedItems"
    @scroll.native="handleOnScroll"
  >
    <template v-slot:after>
      <div
        style="height: 10px;"
        ref="after"
        v-observe-visibility="afterVisibilityChanged"
      >
        <template v-if="isLoading">
          <slot name="loading">
            <fd-spinner v-if="isLoading" />
          </slot>
        </template>
      </div>
    </template>

    <template v-slot="{ item, index, active }">
      <component
        :is="dynamicScrollerItemComponent"
        @click.native="selectItem(item)"
        :item="item"
        :active="active"
        :data-index="index"
        :data-active="active"
        :class="rowClasses(item)"
        :size-dependencies="[item.title, item.subtitle]"
      >
        <slot name="item" v-bind="{ item, index, active }"></slot>
      </component>
    </template>
  </component>
</template>

<script>
import FdSpinner from "./../Spinner/Spinner.vue";
import { shortUuid } from "./../../lib";

const _normalizedItem = item => {
  return {
    fd__id: shortUuid(),
    ...item
  };
};
const _normalizedItems = items => items.map(_normalizedItem);

export default {
  name: "FdVirtualizedList",
  components: { FdSpinner },
  props: {
    // If set, FdVirtualizedList automatically requests more items. Assume that your list has space for 30 items to be displayed at the same time and after loading the initial batch there is still space left. If totalItemCount is set FdVirtualList automatically requests more items if there are more to fetch. This is repeated, until there is no space left. Of course the user can still load more items by scrolling to the bottom.
    totalItemCount: {
      type: Number,
      default: null
    },
    // Minimal size of the items. Will be passed onto DynamicScroller.
    minItemSize: { type: Number, default: 30 },
    // Under the hood FdVirtualizedList is using Vue's built in dynamic-component-mechanism to render components that belong to vue-virtual-scroller. In case you have customized the installation of vue-virtual-scroller use this prop to tell FdVirtualizedList about the DynamicScroller.
    dynamicScrollerComponent: {
      type: [Object, Function, String],
      default: "DynamicScroller"
    },
    // See dynamicScrollerComponent for more information.
    dynamicScrollerItemComponent: {
      type: [Object, Function, String],
      default: "DynamicScrollerItem"
    },
    // Items to be rendered by the virtualized list.
    items: { type: Array, default: () => [] },
    // Function to be called when the list needs more items from you. This function is called with a callback parameter that you MUST call at some point with additional items.
    loadMoreItems: { type: Function, default: null }
  },
  computed: {
    normalizedItems() {
      return _normalizedItems(this.items_);
    },
    isLoading() {
      return this.state === "loading";
    }
  },
  watch: {
    items(newItems) {
      this.items_ = newItems;
    }
  },
  mounted() {
    if (this.items.length === 0) {
      this.startToLoadMoreItems();
    }
    this.$forceUpdate();
  },
  updated() {
    requestAnimationFrame(() => {
      this.loadMoreItemsIfNeeded();
    });
  },
  methods: {
    afterVisibilityChanged(isVisible) {
      this.afterSlotVisible = isVisible;
      if (isVisible) {
        this.loadMoreItemsIfNeeded();
      }
    },
    loadMoreItemsIfNeeded() {
      const { totalItemCount, isLoading } = this;
      const loadingIsPossible = totalItemCount != null && !isLoading;
      if (!loadingIsPossible) {
        return;
      }
      const isNeeded =
        this.afterSlotVisible && totalItemCount > this.items.length;
      if (!isNeeded) {
        return;
      }
      this.startToLoadMoreItems();
    },
    startToLoadMoreItems(event) {
      if (this.loadMoreItems != null) {
        this.state = "loading";
        if (event != null) {
          event.preventDefault();
          event.stopPropagation();
        }
        this.loadMoreItems(this.acceptNewItems);
      }
    },
    acceptNewItems(newItems) {
      this.items_ = [...this.items_, ...newItems];
      this.state = "default";
      this.$forceUpdate();
      requestAnimationFrame(() => {
        this.loadMoreItemsIfNeeded();
      });
    },
    /** @param {Event} event */
    handleOnScroll(event) {
      const {
        target: { scrollTop, clientHeight, scrollHeight }
      } = event;
      if (scrollTop + clientHeight >= scrollHeight) {
        if (this.state === "loading") {
          return;
        }
        this.startToLoadMoreItems(event);
      }
    },
    selectItem(item) {
      this.selectedId = item.fd__id;
      this.$emit("input", item);
    },
    rowClasses(item) {
      return {
        "list-item--selected": item.fd__id === this.selectedId
      };
    }
  },
  data() {
    return {
      afterSlotVisible: false,
      state: "default",
      selectedId: null,
      items_: this.items
    };
  }
};
</script>

<style>
.vue-recycle-scroller__item-view.hover {
  background-color: var(--fd-color-background-hover);
}
.list-item--selected {
  background-color: var(--fd-color-background-selected);
}
</style>
