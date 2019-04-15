<template>
  <FdPopover noArrow>
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

    <template #body="{hide}">
      <slot :hideCompletions="hide" />
    </template>
  </FdPopover>
</template>

<script>
import { Uid } from "@/mixins";
import { InputGroup as FdInputGroup } from "@/components/Form";
import FdPopover from "@/components/Popover/Popover.vue";

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
  provide() {
    return {
      combobox: this
    };
  },
  props: {
    value: { type: String, default: null },
    placeholder: { type: String, default: "" },
    popoverVisible: { type: Boolean, default: false },
    compact: { type: Boolean, default: false }
  },
  data() {
    return {
      currentPopoverVisible: this.popoverVisible,
      currentValue: this.value
    };
  }
};
</script>
