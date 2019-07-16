<template>
  <input
    :class="inputClasses"
    :disabled="disabled ? '' : null"
    :checked="checked"
    @change="updateInput"
    v-on="$listeners"
    :value="value"
    type="checkbox"
    v-bind="$attrs"
    :id="inputId"
  />
</template>

<script>
import { isInputElement } from "./Helper";
import { withoutDuplicates } from "./../../../util";
import InputMixin from "./InputMixin";
import { $modelValueWithDefault, $valueWithDefault } from "./Helper/prop";

export default {
  name: "FdCheckbox",
  mixins: [InputMixin],
  // inheritAttrs: true,
  inject: {
    // We need the form item so that we can say tell the form item
    // to render the checked-style
    formItem: { default: null }
  },
  model: {
    event: "update",
    prop: "modelValue"
  },
  props: {
    trueValue: $valueWithDefault(true),
    falseValue: $valueWithDefault(false),
    value: $valueWithDefault(false),
    modelValue: $modelValueWithDefault(false)
  },
  mounted() {
    const formItem = this.formItem;
    if (formItem) {
      formItem.setCheck(true);
    }
  },
  computed: {
    checked() {
      const { modelValue, value, trueValue } = this;
      if (Array.isArray(modelValue)) {
        if (value == null) {
          throw Error("value cannot be null");
        }
        return modelValue.indexOf(value) >= 0;
      }
      return modelValue === trueValue;
    }
  },
  methods: {
    updateInput(event) {
      const { target } = event;
      if (target == null) {
        return;
      }
      if (!isInputElement(target)) {
        return;
      }
      const { checked } = target;
      const { modelValue, value, trueValue, falseValue } = this;
      if (value == null) {
        throw Error("value cannot be null");
      }
      if (Array.isArray(modelValue)) {
        let newValue = [...modelValue];
        if (checked) {
          newValue.push(value);
        } else {
          newValue = newValue.filter(currentValue => currentValue !== value);
        }
        const newValueWithoutDuplicates = withoutDuplicates(newValue);
        this.$emit("update", newValueWithoutDuplicates, event);
      } else {
        this.$emit("update", checked ? trueValue : falseValue, event);
      }
    }
  }
};
</script>
