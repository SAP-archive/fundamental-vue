<template>
  <ul class="fd-tree" role="tree">
    <fd-tree-item
      v-for="(element, index) in items"
      :key="index"
      :item="element"
      :itemIdPath="itemIdPath"
      :itemValuePath="itemValuePath"
      :itemChildrenPath="itemChildrenPath"
      :itemDisabledPath="itemDisabledPath"
    >
      <template v-slot:prepend="{ item, expanded }">
        <slot name="prepend" :item="item" :expanded="expanded" />
      </template>
      <template v-slot:label="{ item, expanded }">
        <slot name="label" :item="item" :expanded="expanded" />
      </template>
    </fd-tree-item>
  </ul>
</template>

<script>
import FdTreeItem from "./TreeItem.vue";
import TreeItemProps from "./TreeItemProps.vue";

export default {
  name: "FdTree",
  mixins: [TreeItemProps],
  components: { FdTreeItem },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>

<style></style>
