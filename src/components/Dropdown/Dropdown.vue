<template>
  <fd-menu-popover
    ref="menuPopover"
    placement="bottom-end"
    body-size-mode="at-least-trigger"
    @select="handleMenuPopoverSelect"
  >
    <template #control="popoverProps">
      <div class="fd-dropdown" :class="classes" v-bind="$attrs">
        <slot
          name="control"
          v-bind="popoverProps"
          :compact="compact"
          :icon="icon"
          :disabled="disabled"
        >
          <fd-dropdown-control
            :compact="compact"
            :icon="icon"
            :type="controlType"
            :disabled="disabled"
            @click="handleControlClick"
            @keydown.enter.native.prevent="handleEnter"
          >
            {{ title }}
          </fd-dropdown-control>
        </slot>
      </div>
    </template>
    <template #default="popoverProps">
      <slot v-bind="popoverProps" />
    </template>
  </fd-menu-popover>
</template>

<script>
import FdMenuPopover from "./../MenuPopover/MenuPopover.vue";
import FdDropdownControl from "./../DropdownControl/DropdownControl.vue";

export default {
  name: "FdDropdown",
  inheritAttrs: false,
  props: {
    title: String,
    compact: Boolean,
    toolbar: Boolean,
    icon: String,
    disabled: Boolean
  },
  methods: {
    // This method is called in two different scenarios:
    // 1. The user clicks on the control element or presses enter while it
    //    has focus: In that case we simply want to show the menu.
    // 2. The user clicks on the control element or presses enter while it
    //    is already open. The intention is to either confirm the selection
    //    or to close the menu.
    handleControlClick() {
      const { menuPopover } = this.$refs;
      if (menuPopover.visible_) {
        this._confirmHighlighted();
        return;
      }
      menuPopover.show();
    },
    handleEnter() {
      this._confirmHighlighted();
    },
    handleMenuPopoverSelect(item) {
      const { menuPopover } = this.$refs;
      menuPopover.highlightedId = item.uid;
      this.$emit("select", item);
    },
    _confirmHighlighted() {
      const { menuPopover } = this.$refs;
      this.$emit("select", menuPopover.highlightedItem);
      menuPopover.hide();
    }
  },
  computed: {
    controlType() {
      return this.toolbar ? "standard" : null;
    },
    classes() {
      return {
        "fd-dropdown--compact": this.compact,
        "fd-dropdown--standard": this.toolbar
      };
    }
  },
  components: { FdDropdownControl, FdMenuPopover }
};
</script>
