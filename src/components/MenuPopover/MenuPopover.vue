<template>
  <fd-popover ref="popover" v-bind="$attrs" @update:visible="updateVisible">
    <template #control="controlProps">
      <div
        @keydown.down.prevent="highlightNextItem"
        @keydown.up.prevent="highlightPreviousItem"
        @keyup.esc.prevent="controlProps.hide"
      >
        <slot name="control" v-bind="controlProps" />
      </div>
    </template>
    <template #default="bodyProps">
      <fd-menu ref="menu" @select="handleMenuSelect" @highlight="$emit('highlight', $event)">
        <slot v-bind="bodyProps" />
      </fd-menu>
    </template>
  </fd-popover>
</template>

<script>
import FdMenu from "./../Menu/Menu.vue";
import FdPopover from "./../Popover/Popover.vue";

export default {
  name: "FdMenuPopover",
  components: { FdPopover, FdMenu },
  props: {
    // Imagine the following scenario:
    // 1. A user clicks on the control – a menu is displayed.
    // 2. Now the user is using arrow.down to highlight the first
    //    menu item.
    // 3. Now the user clicks outside of the menu.
    // 4. User opens the menu again.
    // Sometimes you want the highlighted (but not selected item)
    // to remaing highlighted. Sometimes not (product menu).
    // This prop can be used to adjust exactly that.
    discardHighlight: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    getPopover() {
      return this.$refs.popover;
    },
    // Delegate the usualal suspects to fd-popover…
    show() {
      this.getPopover().show();
    },
    hide() {
      this.getPopover().hide();
    },
    toggle() {
      this.getPopover().toggle();
    },
    // Highlight Management
    highlightNextItem() {
      this.$refs.menu.highlightNextItem();
    },
    highlightPreviousItem() {
      this.$refs.menu.highlightPreviousItem();
    },
    // Misc
    updateVisible(visible) {
      this.visible_ = visible;
      if (this.discardHighlight) {
        this.highlightedId = null;
      }
    },
    handleMenuSelect(item) {
      this.$emit("select", item);
      this.getPopover().hide();
    }
  },
  computed: {
    highlightedId: {
      set(newId) {
        this.$refs.menu.highlightedId = newId;
      },
      get() {
        return this.$refs.menu.highlightedId;
      }
    },
    highlightedItem() {
      return this.$refs.menu.highlightedItem;
    }
  },
  data() {
    return {
      visible_: false
    };
  }
};
</script>
