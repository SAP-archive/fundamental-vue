<template>
  <nav :class="classes">
    <slot />
  </nav>
</template>

<script>
import arrayFromNodeList from "./../../util/array-from-node-list";
import { getMenuItemLinkUidFromEl } from "./dom-helper";

import Vue from "vue";

export default {
  name: "FdMenu",
  provide() {
    return {
      menuHighlight: this.menuHighlight_,
      menu: this
    };
  },
  props: {
    highlightsSelection: { type: Boolean, default: false },
    highlightedUid: { type: String, default: null },
    selectedUid: { type: String, default: null },
    canHaveAddon: { type: Boolean, default: false }
  },
  data() {
    return {
      menuItemsById: {},
      highlightedUid_: this.highlightedUid,
      selectedUid_: this.selectedUid
    };
  },
  watch: {
    highlightedUid(value) {
      this.highlightedUid_ = value;
      this.highlightedId = value;
    },
    selectedUid(value) {
      this.selectedUid_ = value;
    }
  },
  beforeCreate() {
    this.menuHighlight_ = Vue.observable({
      highlightedId: null
    });
  },
  computed: {
    highlightedId: {
      set(newId) {
        this.menuHighlight_.highlightedId = newId;
      },
      get() {
        return this.menuHighlight_.highlightedId;
      }
    },
    highlightedItem() {
      return this.menuItemForId(this.highlightedId);
    },
    classes() {
      return {
        "fd-menu": true,
        "fd-menu--addon-before": this.canHaveAddon
      };
    }
  },
  methods: {
    menuItemForId(id) {
      return this.menuItemsById[id];
    },
    registerMenuItem(menuItem) {
      this.menuItemsById[menuItem.uid] = menuItem;
    },
    unregisterMenuItem(menuItem) {
      delete this.menuItemsById[menuItem.uid];
    },
    highlightMenuItemLinkEl(el) {
      const linkUid = getMenuItemLinkUidFromEl(el);
      const { menuItemsById } = this;
      for (const itemId in menuItemsById) {
        const item = menuItemsById[itemId];
        if (item.uid === linkUid) {
          this.menuHighlight_.highlightedId = item.uid;
          this.$emit("highlight", item);
          this.highlightedUid_ = item.uid;
          this.$emit("update:highlightedUid", this.highlightedUid_);
          return;
        }
      }
    },
    highlightNextItem() {
      const items = this.menuItemElements();
      if (items.length === 0) {
        return;
      }
      /** @param {HTMLElement} el */
      const isSelected = el => el.classList.contains("is-selected");
      const index = items.findIndex(isSelected);
      if (index < 0) {
        /** @type {HTMLElement} */
        const firstLink = items[0];
        this.highlightMenuItemLinkEl(firstLink);
      } else {
        // Is there a next item?
        const nextIndex = index + 1;
        const hasNext = nextIndex < items.length;
        if (!hasNext) {
          return;
        }
        const nextItem = items[nextIndex];
        this.highlightMenuItemLinkEl(nextItem);
      }
    },
    highlightPreviousItem() {
      const items = this.menuItemElements();
      if (items.length === 0) {
        return;
      }
      if (this.menuHighlight_.highlightedId == null) {
        // No selection means that we should now select the last element
        this.highlightMenuItemLinkEl(items[items.length - 1]);
        return;
      }
      /** @param {HTMLElement} el */
      const isSelected = el => el.classList.contains("is-selected");
      const index = items.findIndex(isSelected);
      if (index <= 0) {
        return;
      }
      this.highlightMenuItemLinkEl(items[index - 1]);
    },
    menuItemElements() {
      const selector = ".fd-menu__item:not(.is-disabled):not([disabled])";
      return arrayFromNodeList(this.$el.querySelectorAll(selector));
    },
    menuItemDidClick(item, event) {
      this.$emit("select", item, event);
      this.selectedUid_ = item.uid;
      this.$emit("update:selectedUid", this.selectedUid_);

      if (this.highlightsSelection) {
        this.highlightedUid_ = item.uid;
        this.menuHighlight_.highlightedId = item.uid;
        this.$emit("update:highlightedUid", this.highlightedUid_);
      }
    }
  }
};
</script>
