<template>
  <div class="fd-popover">
    <!-- Complicated Trigger Control logic: BEGIN-->
    <div class="fd-popover__control" ref="control">
      <div v-if="$slots.control != null" @click="toggle" role="button"><slot name="control" /></div>
      <slot v-else :toggle="toggle" :visible="currentPopoverVisible" name="control">
        <Button
          class="fd-popover__control"
          :aria-controls="uid"
          :aria-expanded="currentPopoverVisible"
          aria-haspopup="true"
          @click="toggle"
        >{{title}}</Button>
      </slot>
    </div>
    <!-- Complicated Trigger Control logic: END-->
    <ClickAwayContainer
      :ignoredElements="ignoredElements"
      :id="uid"
      class="fd-popover__body"
      :class="{
            'fd-popover__body--right': this.placement === 'right',
            'fd-popover__body--no-arrow': this.noArrow,
          }"
      @clickOutside="hidePopover"
      :active="currentPopoverVisible"
      :aria-hidden="!currentPopoverVisible"
    >
      <slot name="body">
        <Menu @select="handleItemClick">
          <MenuList>
            <slot/>
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
  while(parent != null) {
    result.push(parent);
    parent = parent.parentElement;
  }
  return result;
}

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
    ignoredElements(): (() => Element[]) {
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
      handler(visible: boolean) {
        this.currentPopoverVisible = visible;
      }
    }
  },
  methods: {
    ignored(element: Element): boolean {
      console.log("controlElement", this.controlElement);
      console.log("element", element);
      const ignoredElement = this.controlElement;
      if(ignoredElement == null) { return false; }
      const path = pathToRootFrom(element);
      console.log(path);
      const index = path.indexOf(ignoredElement);
      const ignore = index  >= 0;
      // debugger;
      return ignore;
    },
    handleItemClick(value: string | null) {
      this.$emit("click", value);
      this.toggle();
    },
    hidePopover() {
      this.currentPopoverVisible = false;
      this.$emit("visible", false);
    },
    toggle() {
      // debugger;
      this.currentPopoverVisible = !this.currentPopoverVisible;
      this.$emit("visible", this.currentPopoverVisible);
    }
  },
  data() {
    return {
      currentPopoverVisible: this.popoverVisible || false
    };
  }
});
</script>
