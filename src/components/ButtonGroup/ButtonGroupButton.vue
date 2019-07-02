<template>
  <FdButton
    v-bind="$attrs"
    v-on="$listeners"
    :aria-pressed="String(pressed)"
    @click="toggle"
    :compact="finalCompact"
  >
    <!-- button content – usually plain text -->
    <slot />
  </FdButton>
</template>

<script>
import FdButton from "./../Button/Button.vue";
import { Compactable } from "./../../mixins";
import { shortUuid } from "./../../lib";

// A button which must be placed inside a button group.
export default {
  name: "FdButtonGroupButton",
  components: { FdButton },
  mixins: [Compactable],
  inject: ["group"],
  props: {
    // The value associated with this button when selected.
    value: {
      type: [String, Number, Boolean],
      // a unique but short id (for convenience)
      default: shortUuid
    }
  },
  methods: {
    toggle() {
      return this.group.didClickButton(this.value);
    }
  },
  computed: {
    groupValue() {
      return this.group.value;
    },
    pressed() {
      return this.groupValue.indexOf(this.value) >= 0;
    }
  }
};
</script>
