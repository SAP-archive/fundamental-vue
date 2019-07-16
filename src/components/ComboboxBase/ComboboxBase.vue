<template>
  <fd-popover ref="popover" body-size-mode="equal-trigger" placement="bottom-start">
    <template #control="{ hide, show, toggle }">
      <div class="fd-combobox-control">
        <fd-input-group :compact="compact">
          <template #input>
            <slot name="input" :hideCompletions="hide" :showCompletions="show" />
          </template>

          <template #after>
            <fd-input-group-addon>
              <slot name="after" :toggleCompletions="toggle" />
            </fd-input-group-addon>
          </template>
        </fd-input-group>
      </div>
    </template>

    <template #default="{hide}">
      <slot :hideCompletions="hide" />
    </template>
  </fd-popover>
</template>

<script>
import { Uid } from "./../../mixins";
import FdInputGroup from "./../InputGroup/InputGroup.vue";
import FdInputGroupAddon from "./../InputGroup/InputGroupAddon.vue";
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
    FdInputGroup,
    FdInputGroupAddon
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
