<template>
  <div class="fd-button-group" role="group">
    <!-- multiple `fd-button-group-button`'s -->
    <slot />
  </div>
</template>

<script>
import { CompactableContainer } from "./../../mixins";
import SingleSelectionMode from "./selection/single";
import MultipleSelectionMode from "./selection/multiple";

// Group a series of buttons together on a single line with the button group. You use this in combincation with `fd-button-group-button`.
export default {
  name: "FdButtonGroup",
  mixins: [CompactableContainer],
  props: {
    // The values of all selected buttons inside this group.
    value: {
      type: Array,
      // `[]`
      default: () => []
    },
    // A custom selection mode
    selectionMode: {
      // Either a string (`single`: only one button can be selected; `multiple`: multiple buttons can be selected) or a selection-mode-function: `selectionMode(value: any[], clickedButtonValue: any): any[]`
      type: [String, Function],
      // `single`
      default: "single",
      validate: value => {
        if (value == null) {
          return false;
        }
        if (typeof value === "string") {
          return value === "single" || value === "multiple";
        }
        return true;
      }
    }
  },
  provide() {
    return {
      group: this
    };
  },
  computed: {
    selectionHandler() {
      const { selectionMode } = this;
      if (typeof selectionMode === "function") {
        return selectionMode;
      }
      switch (selectionMode) {
        case "single": {
          return SingleSelectionMode;
        }
        case "multiple": {
          return MultipleSelectionMode;
        }
        default:
          return SingleSelectionMode;
      }
    }
  },
  methods: {
    didClickButton(buttonValue) {
      const newValue = this.selectionHandler(this.value, buttonValue);
      // Fired when the value changes
      // @arg new values (array of button values)
      this.$emit("input", newValue);
    }
  }
};
</script>
