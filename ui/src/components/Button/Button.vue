<template>
  <button :class="classes" @click="click" :disabled="disabled">
    <slot />
  </button>
</template>

<script>
import Vue from "vue";
import { ButtonContainer } from "./ButtonContainer";
import ButtonTypes from "./ButtonTypes";
import { mixins, Icon, Compactable, Uid } from "@/mixins";

export default {
  name: "FdButton",
  mixins: [Icon, Uid, Compactable],
  props: {
    styling: {
      type: String,
      default: null,
      validator: value => ["emphasized", "light"].indexOf(value) >= 0
    },
    type: {
      type: String,
      default: null,
      validator: value => ButtonTypes.indexOf(value) >= 0
    },
    state: {
      type: String,
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
      this.$emit("click", event);
    }
  },
  computed: {
    disabled() {
      return this.state === "disabled";
    },
    classes() {
      // @ts-ignore
      return [
        this.styling == null ? "fd-button" : "",
        this.compact ? "fd-button--compact" : "",
        this.styling != null ? `fd-button--${this.styling}` : "",
        this.type != null ? `fd-button--${this.type}` : "",
        this.state !== "normal" ? `is-${this.state}` : "",
        ...this.iconClasses
      ];
    }
  }
};
</script>
