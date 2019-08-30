<template>
  <fd-tree :items="treeData">
    <template v-slot:label="{ item, expanded }">
      <span class="object-tree--property-name" style="margin-right: 5px">{{ item.name }}:</span>
      <span :class="[`object-tree--property-${item.type}`]">{{ item.value }}</span>
    </template>
  </fd-tree>
</template>

<script>
import FdTree from "../tree";
import { createTreeData } from "./utils";

export default {
  name: "FdObjectTree",
  components: { FdTree },
  props: {
    object: {
      //  the object to represent as tree
      type: Object,
      default: () => {}
    },
    json: {
      //  the json string of the object to represent as tree
      type: String,
      default: ""
    },
    rootName: {
      //  the label to display for the root of the tree
      type: String,
      default: "Object"
    },
    ignoreProperties: {
      //  the names of the properties to ignore and not show in the tree
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      defaultExcludes: ["__ob__"]
    };
  },
  computed: {
    excludes() {
      return new Set(this.defaultExcludes.concat(this.ignoreProperties));
    },
    treeData() {
      return createTreeData(this.object || this.json, this.excludes, {}, this.rootName);
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../../node_modules/fundamental-styles/scss/helpers.scss";

.object-tree--property-name {
  font-weight: 600;
}
.object-tree--property-object,
.object-tree--property-array {
  font-weight: bold;
  font-style: italic;
  color: fd-color(shell, 5);
}

.object-tree--property-boolean {
  color: fd-color(accent, 6);
}
.object-tree--property-string,
.object-tree--property-symbol {
  font-style: italic;
  color: fd-color(action, 3);
}
.object-tree--property-number {
  color: fd-color(accent, 8);
}
.object-tree--property-function {
  font-style: italic;
}

.object-tree--property-null {
  font-style: italic;
  color: fd-color(neutral, 4);
}
</style>
