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

<script lang="ts">
import { mixins, Uid } from "@/mixins";
import {
  Input as FdInput,
  InputGroup as FdInputGroup
} from "@/components/Form";
import FdButton from "@/components/Button/Button.vue";
import FdPopover from "@/components/Popover/Popover.vue";
import { PropValidator } from "vue/types/options";

export default mixins(Uid).extend({
  name: "FdComboboxBase",
  model: {
    prop: "value",
    event: "update"
  },
  components: {
    FdButton,
    FdPopover,
    FdInput,
    FdInputGroup
  },
  provide(): object {
    return {
      combobox: this as any
    };
  },
  props: {
    value: { type: String, default: null } as PropValidator<string | null>,
    placeholder: { type: String, default: "" } as PropValidator<string>,
    popoverVisible: { type: Boolean, default: false } as PropValidator<boolean>,
    compact: { type: Boolean, default: false } as PropValidator<boolean>
  },
  data() {
    return {
      currentPopoverVisible: this.popoverVisible as boolean,
      currentValue: this.value as string | number | null
    };
  }
});
</script>
