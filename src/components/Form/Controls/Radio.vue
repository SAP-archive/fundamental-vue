<template>
  <input
    type="radio"
    class="fd-form__control"
    :class="classes"
    :id="uid"
    :disabled="disabled"
    :checked="shouldBeChecked"
    :value="value"
    @change="updateInput"
  >
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
const InputStates = Object.values(stateMapping);

type ValueType = string | number | boolean;
const ValueCtors = [String, Number, Boolean];

export default Vue.extend({
  name: "FdRadio",
  model: {
    prop: "modelValue",
    event: "change"
  },
  inject: {
    formItem: { default: null },
    itemId: { default: null }
  },
  props: {
    trueValue: { type: ValueCtors, default: true } as PropValidator<ValueType>,
    falseValue: { type: ValueCtors, default: false } as PropValidator<
      ValueType
    >,
    value: { type: ValueCtors, default: true } as PropValidator<ValueType>,
    compact: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    state: {
      default: null,
      type: String,
      validator: (value: string) => InputStates.indexOf(value) >= 0
    } as PropValidator<InputState | null>,
    modelValue: {
      type: [String, Boolean, Number],
      default: false
    } as PropValidator<ValueType | ValueType[]>
  },
  mounted() {
    // @ts-ignore
    const formItem = this.formItem;
    if (formItem) {
      formItem.setCheck(true);
    }
  },
  computed: {
    uid(): string | null {
      // @ts-ignore
      return this.formItemId;
    },
    shouldBeChecked(): boolean {
      const { modelValue, value } = this;
      return modelValue === value;
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
  methods: {
    updateInput({ target }: Event): void {
      if (target == null) {
        return;
      }
      if (isInputElement(target)) {
        this.$emit("change", target.value);
      }
    }
  }
});
</script>
