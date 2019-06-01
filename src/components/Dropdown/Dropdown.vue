<template>
  <fd-menu-popover placement="bottom-end" body-size-mode="at-least-trigger">
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
            @click="popoverProps.toggle"
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
