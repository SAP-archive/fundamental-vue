<template>
  <div class="fd-button-group" role="group">
    <slot />
  </div>
</template>

<script>
import { CompactableContainer } from "./../../mixins";
import SingleSelectionMode from "./selection/single";
import MultipleSelectionMode from "./selection/multiple";

export default {
  mixins: [CompactableContainer],
  name: "FdButtonGroup",
  props: {
    value: { type: Array, default: () => [] },
    selectionMode: {
      type: [String, Function],
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
      this.$emit("input", newValue);
    }
  }
};
</script>
