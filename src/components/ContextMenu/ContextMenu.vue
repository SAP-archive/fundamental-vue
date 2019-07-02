<template>
  <fd-menu-popover placement="bottom-start" with-arrow :flips="false">
    <template #control="popoverProps">
      <!-- custom `fd-context-button` -->
      <slot name="button" v-bind="controlProps(popoverProps)">
        <fd-context-button @click="popoverProps.toggle" />
      </slot>
    </template>
    <template #default>
      <!-- one or more `fd-menu-list`'s -->
      <slot />
    </template>
  </fd-menu-popover>
</template>

<script>
import FdMenuPopover from "./../MenuPopover/MenuPopover.vue";
import FdContextButton from "./../ContextButton/ContextButton.vue";

// Context menu component
export default {
  name: "FdContextMenu",
  components: {
    FdMenuPopover,
    FdContextButton
  },
  methods: {
    controlProps(controlProps) {
      return {
        ...controlProps,
        toggleContextMenu: controlProps.toggle
      };
    }
  }
};
</script>
