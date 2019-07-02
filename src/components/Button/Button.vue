<template>
  <button :class="classes" @click="click" :disabled="disabled">
    <!-- button content -->
    <slot />
  </button>
</template>

<script>
import ButtonTypes from "./ButtonTypes";
import { Icon, Uid } from "./../../mixins";

// Buttons allow users to perform actions.
export default {
  name: "FdButton",
  mixins: [Icon, Uid],
  props: {
    // Whether or not the button is compactable. A compactable button can become less tall on desktop if the view port is getting smaller.
    compact: Boolean,
    styling: {
      // `emphasized` / `light`
      type: String,
      default: null,
      validator: value => ["emphasized", "light"].indexOf(value) >= 0
    },
    // Type of the button
    type: {
      // `standard` / `positive` / `medium` / `negative`
      type: String,
      // `null` by default – renders a default button with no special meaning/semantics.
      default: null,
      validator: value => ButtonTypes.indexOf(value) >= 0
    },
    // State of the button – usually not of really useful but used in combination with `fd-button-group`.
    state: {
      // `normal` / `selected` / `disabled`
      type: String,
      // `normal` – no special state.
      default: "normal",
      validator: value => ["normal", "selected", "disabled"].indexOf(value) >= 0
    }
  },
  methods: {
    click(event) {
      if (this.state === "disabled") {
        event.stopImmediatePropagation();
        return;
      }
      // Fired when the button has been clicked.
      // @arg the `Event` that triggered the click.
      this.$emit("click", event);
    }
  },
  computed: {
    disabled() {
      return this.state === "disabled";
    },
    classes() {
      return [
        this.styling ? "" : "fd-button",
        this.compact ? "fd-button--compact" : "",
        this.styling ? `fd-button--${this.styling}` : "",
        this.type ? `fd-button--${this.type}` : "",
        this.state !== "normal" ? `is-${this.state}` : "",
        ...this.iconClasses
      ];
    }
  }
};
</script>
