<template>
  <fd-popover v-bind="$attrs">
    <template #control="controlProps">
      <slot name="control" v-bind="controlProps" />
    </template>

    <template #default="bodyProps">
      <fd-menu @select="bodyProps.hide">
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
  components: { FdPopover, FdMenu }
};
</script>
