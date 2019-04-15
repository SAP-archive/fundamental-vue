<template>
  <div class="fd-popover">
    <!-- Complicated Trigger Control logic: BEGIN-->
    <div class="fd-popover__control" ref="control" v-fd-is-inside>
      <div v-if="$slots.control != null" @click="toggle" role="button">
        <slot v-fd-is-inside name="control" v-bind="contextProps" />
      </div>
      <slot v-else v-bind="contextProps" v-fd-is-inside name="control">
        <Button
          class="fd-popover__control"
          :aria-controls="uid"
          :aria-expanded="currentPopoverVisible"
          aria-haspopup="true"
          @click="toggle"
          >{{ title }}</Button
        >
      </slot>
    </div>
    <!-- Complicated Trigger Control logic: END-->
    <div
      :id="uid"
      class="fd-popover__body"
      :class="{
        'fd-popover__body--right': this.placement === 'right',
        'fd-popover__body--no-arrow': this.noArrow
      }"
      v-fd-detects-outside-interaction="currentPopoverVisible"
      v-fd-on-click-outside="hidePopover"
      :aria-hidden="!currentPopoverVisible"
    >
      <slot name="body" v-bind="contextProps">
        <Menu v-if="$slots.default != null" @select="handleItemClick">
          <MenuList>
            <slot v-bind="contextProps" />
          </MenuList>
        </Menu>
      </slot>
    </div>
  </div>
</template>

<script>
import {
  detectsOutsideInteraction,
  onClickOutside,
  isInside
} from "./../../directives/click-outside";
import { ClickOutside, Uid } from "@/mixins";
import { Menu, MenuList } from "@/components/Menu";
import { Button } from "@/components/Button";
import { warn } from "@/core";

const popoverPlacementMapping = {
  left: "left", // default
  right: "right"
};

const PopoverPlacements = Object.keys(popoverPlacementMapping);
const isPlacement = value => PopoverPlacements.indexOf(value) >= 0;

export default {
  name: "FdPopover",
  mixins: [Uid, ClickOutside],
  components: { Button, Menu, MenuList },
  directives: {
    "fd-is-inside": isInside,
    "fd-on-click-outside": onClickOutside,
    "fd-detects-outside-interaction": detectsOutsideInteraction
  },
  model: {
    prop: "popoverVisible",
    event: "visible"
  },
  props: {
    ariaLabel: { type: String, default: "Popover" },
    title: { type: String, default: "Show" },
    placement: {
      type: String,
      default: popoverPlacementMapping.left,
      validator: isPlacement
    },
    noArrow: { type: Boolean, default: false },
    popoverVisible: { type: Boolean, default: false }
  },
  computed: {
    contextProps() {
      return {
        toggle: this.toggle,
        show: this.show,
        hide: this.hide,
        visible: this.currentPopoverVisible
      };
    }
  },
  watch: {
    popoverVisible: {
      immediate: true,
      handler(newValue) {
        this.setCurrentPopoverVisible(newValue);
      }
    }
  },
  methods: {
    setCurrentPopoverVisible(newValue) {
      this.currentPopoverVisible = newValue;
    },
    handleItemClick(value) {
      this.$emit("click", value);
      this.toggle();
    },
    hidePopover() {
      this.setCurrentPopoverVisible(false);
      this.$emit("visible", false);
    },
    hide() {
      this.hidePopover();
    },
    show() {
      this.setCurrentPopoverVisible(true);
      this.$emit("visible", true);
    },
    toggle() {
      const newVisible = !this.currentPopoverVisible;
      this.setCurrentPopoverVisible(newVisible);
      this.$emit("visible", newVisible);
    }
  },
  data() {
    return {
      currentPopoverVisible: this.popoverVisible || false
    };
  }
};
</script>
