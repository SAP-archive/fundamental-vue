<template>
  <fd-menu-popover placement="bottom-start" with-arrow :flips="false">
    <template #control="popoverProps">
      <slot name="button" v-bind="controlProps(popoverProps)">
        <fd-context-button @click="popoverProps.toggle" />
      </slot>
    </template>
    <template #default>
      <slot />
    </template>
  </fd-menu-popover>
</template>

<script>
import FdMenuPopover from "./../MenuPopover/MenuPopover.vue";
import FdContextButton from "./../ContextButton/ContextButton.vue";
export default {
  name: "FdContextMenu",
  components: { FdMenuPopover, FdContextButton },
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
