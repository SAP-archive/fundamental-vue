<template>
  <FdPopper
    ref="popper"
    :bodyClass="bodyClass"
    :ignoredElements="ignoredElements"
    :placement="placement"
    :withArrow="withArrow"
  >
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
  computed: {
    popper() {
      return this.$refs.popper;
    }
  },
  methods: {
    show() {
      this.popper.show();
    },
    hide() {
      this.popper.hide();
    },
    toggle() {
      this.popper.toggle();
    }
  },
  props: {
    bodyClass: { type: [Array, Object, String], default: null },
    ignoredElements: { type: Function, default: () => [] },
    withArrow: Boolean,
    placement: {
      type: String,
      default: "bottom",
      validator: value => PLACEMENTS.indexOf(value) > -1
    }
  }
};
</script>
