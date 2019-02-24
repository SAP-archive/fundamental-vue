<template>
  <button :class="classes" @click="click">
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
    classes() {
      const staticClass = [this.styling == null ? "fd-button" : ""];
      const compact = [this.compact ? "fd-button--compact" : ""];
      const styling = [this.styling ? `fd-button--${this.styling}` : ""];
      const type = [this.type ? `fd-button--${this.type}` : ""];
      const state = [this.state !== "normal" ? `is-${this.state}` : ""];

      // @ts-ignore
      return [
        ...staticClass,
        ...compact,
        ...styling,
        ...type,
        ...state,
        ...this.iconClasses
      ];
    }
  }
};
</script>
