<template>
  <input
    :id="uid"
    :class="classes"
    :checked="checked"
    :disabled="disabled ? '' : null"
    :value="value"
    type="checkbox"
    class="fd-form__control"
    @change="updateInput"
  >
</template>

<script lang="ts">
import { PropValidator } from "vue/types/options";
import { mixins, Uid } from "@/mixins";
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

export default mixins(Uid).extend({
  name: "FdCheckbox",
  inject: ['formItem'],
  model: {
    prop: "modelValue",
    event: "change"
  },
  props: {
    trueValue: { type: ValueCtors, default: () => true } as PropValidator<ValueType>,
    falseValue: { type: ValueCtors, default: () => false } as PropValidator<
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
      type: [Array, String, Boolean, Number],
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
    listeners(): object {
      const { ...listeners } = this.$listeners;
      return listeners;
    },
    classes(): object {
      return {
        "fd-input--compact": this.compact,
        "is-warning": this.state === "warning",
        "is-invalid": this.state === "invalid",
        "is-valid": this.state === "valid",
        "is-required": this.required
      };
    },
    checked(): boolean {
      const modelValue = this.modelValue;
      if (Array.isArray(modelValue)) {
        const value = this.value;
        if (value == null) {
          throw Error("value cannot be null");
        }
        return modelValue.indexOf(value) >= 0;
      }
      return this.modelValue === this.trueValue;
    }
  },
  methods: {
    updateInput(event: Event): void {
      const { target } = event;
      if (target == null) {
        return;
      }
      if (!isInputElement(target)) {
        return;
      }
      const { checked } = target;
      const { modelValue, value } = this;
      if (value == null) {
        throw Error("value cannot be null");
      }
      if (Array.isArray(modelValue)) {
        const set = new Set(modelValue);
        checked ? set.add(value) : set.delete(value);
        const newValue = Array.from(set);
        this.$emit("change", newValue, event);
      } else {
        const newValue = checked === true ? this.trueValue : this.falseValue;
        this.$emit("change", newValue, event);
      }
    }
  },
});
</script>
