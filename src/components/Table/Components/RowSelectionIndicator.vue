<template>
  <Checkbox
    :value="value"
    :disabled="selectionDisabled"
    :modelValue="selected"
    @update="handleChange"
    @click.native="handleNativeClick"
  />
</template>

<script>
import { Checkbox } from "./../../Form";

// Simply wraps a Checkbox in order to hide the ugly truth.
// See handleNativeClick for details. Is there a better way to do this?
export default {
  name: "FdRowSelectionIndicator",
  inject: {
    table: { default: null }
  },
  components: { Checkbox },
  props: {
    selected: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number, Boolean],
      required: true
    }
  },
  methods: {
    // We have to handle native click events this way.
    // The code below stops event propagation if the event was caused
    // by a click on the checkbox itself. Otherwise the click event will
    // also be dispatched to the table row which also tries to modify
    // the table's selection.
    // Ths row selection indicator component is basically simply a checkbox
    // configured like this:
    //
    // <FdCheckbox
    //   :value="item.id"
    //   :modelValue="selected"
    //   @click.native.self.stop="$event.stopPropagation()"
    //   @change="changeSelection"
    // />
    handleNativeClick(event) {
      const { target } = event;
      const isTargetingSelf = target === this.$el;
      if (isTargetingSelf) {
        event.stopPropagation();
      }
    },
    handleChange(selected, event) {
      this.$emit("change", selected, event);
    }
  },
  computed: {
    selectionDisabled() {
      const { table } = this;
      return !(table != null ? table.canSelect : false);
    }
  }
};
</script>
