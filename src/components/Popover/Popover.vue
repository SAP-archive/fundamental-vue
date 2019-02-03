<template>
  <div class="fd-popover">
    <!-- Complicated Trigger Control logic: BEGIN-->
    <div class="fd-popover__control" ref="popoverTriggerControl">
      <div v-if="hasControlSlot" @click="toggle" role="button">
        <slot name="control"/>
      </div>
      <template v-if="hasControlScopedSlot">
        <slot :toggle="toggle" :visible="currentPopoverVisible" name="control"/>
      </template>
      <Button
        v-if="!hasControlSlot && !hasControlScopedSlot"
        class="fd-popover__control"
        :aria-controls="uid"
        :aria-expanded="currentPopoverVisible"
        aria-haspopup="true"
        @click="toggle"
      >{{title}}</Button>
    </div>
    <!-- Complicated Trigger Control logic: END-->
    <ClickAwayContainer
      :id="uid"
      class="fd-popover__body"
      :class="{
            'fd-popover__body--right': this.placement === 'right',
            'fd-popover__body--no-arrow': this.noArrow,
          }"
      @clickOutside="hidePopover"
      :active="currentPopoverVisible"
      :ignoredElements="ignoredElementsHandler"
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
import { Uid, mixins } from '@/mixins2';
import { ClickAwayContainer } from "@/components/ClickAwayContainer";
import { Menu, MenuList } from "@/components/Menu";
import { Button } from "@/components/Button";

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
    hasControlSlot(): boolean {
      return this.$slots.control != null;
    },
    hasControlScopedSlot(): boolean {
      return this.$scopedSlots.control != null;
    }
  },
  watch: {
    popoverVisible: {
      immediate: true,
      handler(visible: boolean) {
        this.currentPopoverVisible = visible;
        this.$emit("visible", this.currentPopoverVisible);
      }
    }
  },
  methods: {
    handleItemClick(value: string | null) {
      this.$emit("click", value);
      this.toggle();
    },
    ignoredElementsHandler() {
      const el = this.$refs.popoverTriggerControl;
      if (el == null) {
        return [];
      }
      return [el];
    },
    hidePopover() {
      this.currentPopoverVisible = false;
      this.$emit("visible", this.currentPopoverVisible);
    },
    toggle() {
      this.currentPopoverVisible = !this.currentPopoverVisible;
      this.$emit("visible", this.currentPopoverVisible);
    }
  },
  data() {
    return {
      currentPopoverVisible: this.popoverVisible
    };
  }
});
</script>
