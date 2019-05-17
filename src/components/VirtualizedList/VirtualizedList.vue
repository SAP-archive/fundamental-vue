<template>
  <component
    :is="dynamicScrollerComponent"
    style="height: 100%;"
    :min-item-size="minItemSize"
    key-field="fd__id"
    :items="normalizedItems"
    @scroll.native="handleOnScroll"
  >
    <template #after>
      <slot name="loading">
        <fd-spinner v-if="isLoading" />
      </slot>
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
        <slot name="item" v-bind="{ item, index, active }" />
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
    minItemSize: { type: Number, default: 30 },
    dynamicScrollerComponent: {
      type: [Object, Function, String],
      default: "DynamicScroller"
    },
    dynamicScrollerItemComponent: {
      type: [Object, Function, String],
      default: "DynamicScrollerItem"
    },
    items: { type: Array, default: () => [] },
    loadMoreItems: { type: Function, default: null },
    value: { type: Object, default: null } // selected item
  },
  computed: {
    normalizedItems() {
      return _normalizedItems(this.items_);
    },
    isLoading() {
      return this.state === "loading";
    }
  },
  methods: {
    acceptNewItems(newItems) {
      this.items_ = [...this.items_, ...newItems];
      this.state = "default";
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
        if (this.loadMoreItems != null) {
          this.state = "loading";
          event.preventDefault();
          event.stopPropagation();
          this.loadMoreItems(this.acceptNewItems);
        }
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
