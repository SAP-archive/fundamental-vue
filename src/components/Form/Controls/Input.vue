<template>
  <textarea
    v-if="type === 'textarea'"
    :class="inputClasses"
    :readonly="readonly ? '' : null"
    :disabled="disabled ? '' : null"
    :placeholder="placeholder"
    :value="value"
    v-on="listeners"
    v-bind="$attrs"
    :id="inputId"
  />
  <input
    v-else
    :class="inputClasses_"
    :readonly="readonly ? '' : null"
    :disabled="disabled ? '' : null"
    :type="type"
    :placeholder="placeholder"
    :value="value"
    @blur="handleBlur"
    @focus="handleFocus"
    v-on="listeners"
    v-bind="$attrs"
    :id="inputId"
  />
</template>

<script>
import InputMixin from "./InputMixin";
import { $default, $valueWithDefault } from "./Helper/prop";

export default {
  methods: {
    handleBlur(event) {
      this.focused = false;
      this.$emit("blur", event);
    },
    handleFocus(event) {
      this.focused = true;
      this.$emit("focus", event);
    },
    handleChange(event) {
      this.$emit("change", event.target.value);
    },
    handleUpdate(event) {
      this.$emit("update", event.target.value);
    }
  },
  name: "FdInput",
  mixins: [InputMixin],
  model: {
    event: "update"
  },
  data() {
    return {
      focused: false
    };
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        change: this.handleChange,
        input: this.handleUpdate
      };
    },
    inputClasses_() {
      return {
        ...this.inputClasses,
        "fd-input": !this.plain
      };
    }
  },
  props: {
    placeholder: $default(""),
    type: $default("text"),
    value: $valueWithDefault("")
  }
};
</script>
