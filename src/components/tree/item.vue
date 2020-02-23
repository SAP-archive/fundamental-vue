<template>
  <li class="fd-tree__item" role="treeitem">
    <slot />
  </li>
</template>

<script>
import TreeItemProps from './tree-item-props.vue'
import { getPropertyByPath } from '../../util/objects'

export default {
  name: 'FdTreeItem',
  mixins: [TreeItemProps],
  data() {
    return {
      isOpen: false
    }
  },
  props: {
    level: {
      // Used to determine the level of the element in the tree hierarchy
      type: Number,
      default: 0
    },

    item: {
      type: Object
    }
  },
  computed: {
    hasChildren() {
      return this.children.length ? true : false
    },
    label() {
      return getPropertyByPath(this.item, this.itemValuePath, '')
    },
    disabled() {
      return getPropertyByPath(this.item, this.itemDisabledPath, false)
    },
    children() {
      return getPropertyByPath(this.item, this.itemChildrenPath, [])
    }
  },
  methods: {
    toggleExpansion() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
