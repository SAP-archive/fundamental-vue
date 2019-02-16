<template>
  <select
    :id="uid"
    :class="classes"
    :value="currentValue"
    :readonly="readonly"
    :disabled="disabled"
    @input="updateInput"
  >
    <slot />
  </select>
</template>

<script lang="ts">
import Vue from "vue";
import { PropValidator } from "vue/types/options";
enum State {
  default = "default",
  valid = "valid",
  invalid = "invalid",
  warning = "warning"
}
const States = Object.keys(State);
type Value = string | number | object | null;

const isValue = (raw: any): raw is Value => {
  if (raw == null) {
    return true;
  }
  if (typeof raw === "string") {
    return true;
  }
  if (typeof raw === "number") {
    return true;
  }
  if (typeof raw === "object") {
    return true;
  }
  return false;
};

export default Vue.extend({
  name: "FdSelect",
  inject: {
    formItem: { default: null }
  },
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    required: { type: Boolean, default: false } as PropValidator<boolean>,
    disabled: { type: Boolean, default: false } as PropValidator<boolean>,
    readonly: { type: Boolean, default: false } as PropValidator<boolean>,
    state: {
      validator: (value: string) => States.indexOf(value) >= 0,
      default: State.default,
      type: String
    },
    value: { default: "", type: [String, Number, Object] } as PropValidator<
      Value
    >
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
      // debugger;
      if (item == null) {
        return "";
      }
      return item.uid;
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(newValue: Value) {
        // debugger;
        this.currentValue = newValue;
      }
    }
  },
  methods: {
    updateInput(event: Event): void {
      const { target } = event;
      if (target == null) {
        return;
      }
      const value = Reflect.get(target, "value");
      if (isValue(value)) {
        this.currentValue = value;
        this.$emit("change", value);
      }
    }
  },
  data() {
    return {
      currentValue: this.value
    };
  }
});
</script>
