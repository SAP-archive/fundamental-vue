<template>
  <textarea
    :id="uid"
    @input="handleInput"
    :class="classes"
    :value="currentValue"
    type="text"
    :placeholder="placeholder"
  />
</template>

<script lang="ts">
import Vue from "vue";
import { isTextAreaElement } from "./Helper";

const stateMapping = {
  default: "default",
  valid: "valid", // green border
  invalid: "invalid", // red border
  warning: "warning" // orange border
};
const States = Object.values(stateMapping);

export default Vue.extend({
  name: "FdTextArea",
  inject: {
    formItem: { default: null }
  },
  props: {
    placeholder: { default: "", type: String },
    value: { default: null, type: String },
    state: {
      default: "default",
      type: String,
      validator: (value: string) => States.indexOf(value) >= 0
    },
    required: { default: false, type: Boolean }
  },
  watch: {
    value: {
      immediate: true,
      handler(newValue: string | null) {
        this.currentValue = newValue;
      }
    }
  },
  methods: {
    handleInput({ target }: Event): void {
      if (target == null) {
        return;
      }
      if (!isTextAreaElement(target)) {
        return;
      }
      const { value } = target;
      this.$emit("input", value);
    }
  },
  computed: {
    classes(): object {
      return {
        "fd-form__control": true,
        "is-warning": this.state === "warning",
        "is-invalid": this.state === "invalid",
        "is-valid": this.state === "valid",
        "is-required": this.required
      };
    },
    uid(): string {
      // @ts-ignore
      const item = this.formItem;
      if (item == null) {
        return "";
      }
      return item.uid;
    }
  },
  data() {
    return {
      currentValue: "" as string | null
    };
  }
});
</script>
