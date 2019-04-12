<template>
  <FdPopper :placement="placement" :withArrow="withArrow">
    <template #reference="{hide, show, toggle}">
      <slot name="control" :hide="hide" :show="show" :toggle="toggle" />
    </template>
    <template #default="{show, toggle, hide}">
      <div>
        <slot :hide="hide" :show="show" :toggle="toggle" />
      </div>
    </template>
  </FdPopper>
</template>

<script>
import FdPopper, { PLACEMENTS } from "./../Popper";
import { Uid } from "./../../mixins";

export default {
  name: "FdPopover",
  components: { FdPopper },
  mixins: [Uid],
  props: {
    withArrow: Boolean,
    placement: {
      type: String,
      default: "bottom",
      validator: value => PLACEMENTS.indexOf(value) > -1
    }
  }
};
</script>
