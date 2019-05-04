<template>
  <FdPopover ref="popover" adjustsBodyWidth placement="bottom-start">
    <template #control="{ hide, show, toggle }">
      <div class="fd-combobox-control">
        <FdInputGroup
          :compact="compact"
          afterClass="fd-input-group__addon--button"
        >
          <slot name="input" :hideCompletions="hide" :showCompletions="show" />

          <template #after>
            <slot name="after" :toggleCompletions="toggle" />
          </template>
        </FdInputGroup>
      </div>
    </template>

    <template #default="{hide}">
      <slot :hideCompletions="hide" />
    </template>
  </FdPopover>
</template>

<script>
import { Uid } from "./../../mixins";
import { InputGroup as FdInputGroup } from "./../Form";
import FdPopover from "./../Popover/Popover.vue";

export default {
  name: "FdComboboxBase",
  mixins: [Uid],
  model: {
    prop: "value",
    event: "update"
  },
  components: {
    FdPopover,
    FdInputGroup
  },
  computed: {
    popover() {
      return this.$refs.popover;
    }
  },
  methods: {
    show() {
      this.popover.show();
    },
    hide() {
      this.popover.hide();
    },
    toggle() {
      this.popover.toggle();
    }
  },
  props: {
    popoverControlClass: {
      type: [Array, Object, String],
      default: null
    },
    popoverClass: {
      type: [Array, Object, String],
      default: null
    },
    ignoredElements: { type: Function, default: () => [] },
    value: { type: String, default: null },
    placeholder: { type: String, default: "" },
    compact: { type: Boolean, default: false }
  },
  data() {
    return {
      currentValue: this.value
    };
  }
};
</script>
