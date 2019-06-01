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
      <fd-menu
        ref="menu"
        @select="handleMenuSelect"
        @highlight="$emit('highlight', $event)"
      >
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
