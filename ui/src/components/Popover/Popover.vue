<template>
  <div class="fd-popover">
    <!-- Complicated Trigger Control logic: BEGIN-->
    <div class="fd-popover__control" ref="control">
      <div v-if="$slots.control != null" @click="toggle" role="button">
        <slot name="control" v-bind="contextProps" />
      </div>
      <slot v-else v-bind="contextProps" name="control">
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
    <ClickAwayContainer
      :ignoredElements="ignoredElements"
      :id="uid"
      class="fd-popover__body"
      :class="{
        'fd-popover__body--right': this.placement === 'right',
        'fd-popover__body--no-arrow': this.noArrow
      }"
      @clickOutside="hidePopover"
      :active="currentPopoverVisible"
      :aria-hidden="!currentPopoverVisible"
    >
      <slot name="body" v-bind="contextProps">
        <Menu v-if="$slots.default != null" @select="handleItemClick">
          <MenuList>
            <slot v-bind="contextProps" />
          </MenuList>
        </Menu>
      </slot>
    </ClickAwayContainer>
  </div>
</template>

<script lang="ts">
import { Uid, mixins } from "@/mixins";
import ClickAwayContainer from "@/components/ClickAwayContainer";
import { Menu, MenuList } from "@/components/Menu";
import { Button } from "@/components/Button";
import { warn } from "@/core";

const pathToRootFrom = (element: Element): Element[] => {
  const result: Element[] = [];
  let parent: Element | null = element.parentElement;
  while (parent != null) {
    result.push(parent);
    parent = parent.parentElement;
  }
  return result;
};

const popoverPlacementMapping = {
  left: "left", // default
  right: "right"
};
type PopoverPlacement = keyof typeof popoverPlacementMapping;
const PopoverPlacements = Object.keys(
  popoverPlacementMapping
) as PopoverPlacement[];

const isPlacement = (value: any) => PopoverPlacements.indexOf(value) >= 0;

export default mixins(Uid).extend({
  name: "FdPopover",
  components: { Button, Menu, MenuList, ClickAwayContainer },
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
    contextProps(): object {
      return {
        toggle: this.toggle,
        show: this.show,
        hide: this.hide,
        visible: this.currentPopoverVisible
      };
    },
    ignoredElements(): () => Element[] {
      const vm = this;
      return () => {
        return vm.controlElement != null ? [vm.controlElement] : [];
      };
    },
    controlElement(): Element | null {
      const control = this.$refs.control;
      if (control == null) {
        return null;
      }
      if (Array.isArray(control)) {
        warn("Trigger control must be a single element or component.");
        return null;
      }
      // @ts-ignore
      return control["$el"] || control;
    }
  },
  watch: {
    popoverVisible: {
      immediate: true,
      handler(newValue: boolean) {
        this.setCurrentPopoverVisible(newValue);
      }
    }
  },
  methods: {
    setCurrentPopoverVisible(newValue: boolean): void {
      this.currentPopoverVisible = newValue;
    },
    ignored(element: Element): boolean {
      const ignoredElement = this.controlElement;
      if (ignoredElement == null) {
        return false;
      }
      const path = pathToRootFrom(element);
      const index = path.indexOf(ignoredElement);
      const ignore = index >= 0;
      return ignore;
    },
    handleItemClick(value: string | null) {
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
});
</script>
