<template>
  <li
    :class="['fd-tree__item', disabled ? 'fd-tree__item-disabled' : '']"
    role="treeitem"
    :aria-isOpen="isOpen"
  >
    <div class="fd-tree__row">
      <div class="fd-tree__col fd-tree__col--control">
        <!-- expand button -->
        <button
          v-if="hasChildren"
          @click="toggleExpansion"
          :class="{
            'fd-tree__control': true,
            'is-pressed': isOpen,
            'fd-tree__control--disabled': disabled
          }"
          aria-label="Expand"
          :aria-disabled="disabled"
          :aria-pressed="isOpen"
        ></button>

        <span class="prepend-wrapper">
          <slot name="prepend" :item="item" :expanded="isOpen" />
        </span>

        <slot name="label" :item="item" :expanded="isOpen">{{ label }}</slot>
      </div>
    </div>
    <ul
      v-if="hasChildren"
      :class="['fd-tree__group', `fd-tree__group--sublevel-${level + 1}`]"
      role="group"
      :aria-hidden="!isOpen"
    >
      <fd-tree-item
        v-for="(child, index) in children"
        :level="level + 1"
        :item="child"
        :itemIdPath="itemIdPath"
        :key="index"
        :itemValuePath="itemValuePath"
        :itemChildrenPath="itemChildrenPath"
        :itemDisabledPath="itemDisabledPath"
      >
        <template v-slot:prepend="{ item, expanded }">
          <slot name="prepend" :item="item" :expanded="isOpen" />
        </template>

        <template v-slot:label="{ item, expanded }">
          <slot name="label" :item="item" :expanded="isOpen" />
        </template>
      </fd-tree-item>
    </ul>
  </li>
</template>

<script>
import TreeItemProps from "./TreeItemProps.vue";
import { getPropertyByPath } from "../../util/objects";

export default {
  name: "FdTreeItem",
  mixins: [TreeItemProps],
  data() {
    return {
      isOpen: false
    };
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
      return this.children.length ? true : false;
    },
    label() {
      return getPropertyByPath(this.item, this.itemValuePath, "");
    },
    disabled() {
      return getPropertyByPath(this.item, this.itemDisabledPath, false);
    },
    children() {
      return getPropertyByPath(this.item, this.itemChildrenPath, []);
    }
  },
  methods: {
    toggleExpansion() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style lang="scss">
@import "../../../node_modules/fundamental-styles/scss/helpers.scss";

.disabled-element {
  color: fd-color(neutral, 3);
}

.fd-tree__item-disabled {
  cursor: not-allowed;
  pointer-events: none;
  @extend .disabled-element;
}

.fd-tree__control--disabled {
  @extend .disabled-element;
}

.prepend-wrapper > * {
  margin-right: 6px;
}
</style>
