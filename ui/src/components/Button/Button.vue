<template>
  <button
    :aria-pressed="isPressed ? 'true' : 'false'"
    @click="click"
    :class="classes"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from "vue";
import { ButtonContainer } from "./ButtonContainer";
import { PropValidator } from "vue/types/options";
import ButtonTypes from "./ButtonTypes";
import { mixins, Uid } from "@/mixins";

export default mixins(Uid).extend({
  name: "FdButton",
  inject: {
    buttonContainer: { default: null },
    grouped: { default: false }
  },
  props: {
    value: {
      type: [String, Number, Boolean],
      default: null
    } as PropValidator<string | number | boolean | null>,
    styling: {
      type: String,
      default: null,
      validator: (value: string) => ["emphasized", "light"].indexOf(value) >= 0
    } as PropValidator<string | null>,
    type: {
      type: String,
      default: null,
      validator: (value: string) => ButtonTypes.indexOf(value) >= 0
    } as PropValidator<string | null>,
    icon: {
      type: String,
      default: null
    } as PropValidator<string | null>,
    compact: Boolean,
    state: {
      type: String,
      default: "normal",
      validator: (value: string) =>
        ["normal", "selected", "disabled"].indexOf(value) >= -1
    }
  },
  methods: {
    click(event: Event) {
      if (this.state === "disabled") {
        event.stopImmediatePropagation();
        return;
      }
      this.$emit("click", event);
      const container = this.buttonContainer_;
      if (container != null) {
        container.didClickButton(this);
      }
    }
  },
  mounted(): void {
    const container = this.buttonContainer_;
    if (container != null) {
      container.registerButton(this);
    }
  },
  destroyed(): void {
    const container = this.buttonContainer_;
    if (container != null) {
      container.unregisterButton(this);
    }
  },
  computed: {
    classes(): string[] {
      const staticClass =
        this.styling == null && !this.computedCompact ? ["fd-button"] : [];
      const compact = this.computedCompact ? ["fd-button--compact"] : [];
      const styling =
        this.styling != null ? [`fd-button--${this.styling}`] : [];
      const icon = this.icon != null ? [`sap-icon--${this.icon}`] : [];
      const type = this.type != null ? [`fd-button--${this.type}`] : [];
      const state = this.state !== "normal" ? [`is-${this.state}`] : [];

      // @ts-ignore
      const grouped = this.grouped_ ? ["fd-button--grouped"] : [];
      return [
        ...staticClass,
        ...compact,
        ...styling,
        ...icon,
        ...type,
        ...state,
        ...grouped
      ];
    },
    computedCompact(): boolean {
      const container = this.buttonContainer_;
      if (container != null) {
        return container.compact;
      }
      return this.compact;
    },
    iconClasses(): object {
      const icon = this.icon;
      if (icon == null) {
        return {};
      }
      return {
        [`sap-icon--${icon}`]: true
      };
    },
    isPressed(): boolean {
      const container = this.buttonContainer_;
      if (container != null) {
        return container.isButtonPressed(this);
      }
      return false;
    },
    buttonContainer_(): ButtonContainer | null {
      return (this as any).buttonContainer;
    },
    grouped_(): boolean {
      return (this as any).grouped;
    }
  }
});
</script>
