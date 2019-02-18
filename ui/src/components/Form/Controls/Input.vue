<template>
  <input
    :id="inputId"
    :value="currentValue"
    @input="updateInput"
    @change="$emit($event.target.value)"
    :readonly="readonly"
    :disabled="disabled"
    :type="type"
    class="fd-form__control"
    :class="classes"
    :placeholder="placeholder"
  />
</template>

<script lang="ts">
import Vue from "vue";
import { PropValidator } from "vue/types/options";
import { isInputElement } from "./Helper";

const stateMapping = {
  valid: "valid",
  invalid: "invalid",
  warning: "warning"
};
type InputState = keyof (typeof stateMapping);
const InputStates = Object.keys(stateMapping);

export default Vue.extend({
  name: "FdInput",
  inject: {
    itemId: { default: null }
  },
  props: {
    placeholder: { default: "", type: String } as PropValidator<string>,
    state: {
      default: null,
      type: String,
      validator: (value: string) => InputStates.indexOf(value) >= 0
    } as PropValidator<InputState | null>,
    required: { type: Boolean, default: false } as PropValidator<boolean>,
    compact: { type: Boolean, default: false } as PropValidator<boolean>,
    disabled: { type: Boolean, default: false } as PropValidator<boolean>,
    readonly: { type: Boolean, default: false } as PropValidator<boolean>,
    value: { default: "", type: [String, Number] } as PropValidator<
      number | string
    >,
    type: { default: "text", type: String } as PropValidator<string>
  },
  computed: {
    inputId(): string | null {
      // @ts-ignore
      return this.itemId;
    },
    classes(): object {
      return {
        "fd-input--compact": this.compact,
        "is-warning": this.state === "warning",
        "is-invalid": this.state === "invalid",
        "is-valid": this.state === "valid",
        "is-required": this.required
      };
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(newValue: string | number | null): void {
        this.currentValue = newValue;
      }
    }
  },
  methods: {
    updateInput({ target }: Event): void {
      if (target == null) {
        return;
      }
      if (!isInputElement(target)) {
        return;
      }
      const { value } = target;
      this.$emit("input", value);
    }
  },
  data() {
    return {
      currentValue: (this.value === undefined || this.value === null
        ? ""
        : this.value) as string | number | null
    };
  }
});
</script>
