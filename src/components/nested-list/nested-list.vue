<template>
  <nav class="fd-nested-list" :class="classes" :aria-hidden="String(!isVisible)">
    <slot />
    <!-- <NestedListItemProvider
      v-for="item in normalizedItems"
      :item="item"
      :key="keyFor(item)"
    >
      <slot name="item" v-bind="item" />
      </NestedListItemProvider> -->
  </nav>
</template>

<script>
import Vue from 'vue'
// import NestedListItemProvider from "./provider/item-provider";
import { default as normalizeItems, normalizedId } from './normalize-items'

export default {
  name: 'FdNestedList',
  // components: { NestedListItemProvider },
  inject: {
    fdNestedListStore: {
      default: null
    },
    fdNestedList: {
      default: null
    },
    // A nested list item can have a nested list as its child.
    // In that case, fdNestedListItem.uid is != null.
    // This is how FdNestedList knows whether or not it is actually
    // nested.
    fdNestedListItem: {
      default: {
        uid: null,
        expanded: false,
        containsList: false
      }
    }
  },
  beforeCreate() {
    this.store_ = Vue.observable({})
  },
  provide() {
    return {
      fdNestedListStore: this.computedStore,
      fdNestedList: this
    }
  },
  props: {
    compact: {
      type: Boolean,
      default: false
    },
    withIcons: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    const item = this.fdNestedListItem
    if (item != null) {
      item.containsList = true
    }
  },
  data() {
    return {
      expandedIds: []
    }
  },
  methods: {
    keyFor(item) {
      return normalizedId(item)
    }
  },
  computed: {
    store() {
      const { fdNestedListStore, computedStore } = this
      return fdNestedListStore != null ? fdNestedListStore : computedStore
    },
    normalizedItems() {
      return normalizeItems(this.items)
    },
    isVisible() {
      const { item, fdNestedList } = this
      const { expandedIds = [] } = fdNestedList || {}

      if (item.uid == null) {
        return true
      }
      return expandedIds.indexOf(item.uid) >= 0
    },
    item() {
      return this.fdNestedListItem
    },
    classes() {
      const { item } = this
      return {
        'fd-nested-list--compact': this.compact,
        'fd-nested-list--text-only': !this.withIcons,
        'level-2': item.uid != null
      }
    }
  }
}
</script>
