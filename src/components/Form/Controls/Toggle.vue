<template>
  <span :class="classes">
    <FdCheckbox
      v-on="$listeners"
      v-bind="$attrs"
      :modelValue="on"
      :value="value"
      :disabled="disabled"
      @update="$emit('update', $event)"
    />
    <span class="fd-toggle__switch" role="presentation" />
  </span>
</template>

<script>
import InputMixin from "./InputMixin";
import FdCheckbox from "./Checkbox.vue";
import { $valueWithDefault, $enum } from "./Helper/prop";

export default {
  name: "FdToggle",
  mixins: [InputMixin],
  inheritAttrs: false,
  components: { FdCheckbox },
  model: {
    event: "update",
    prop: "on"
  },
  props: {
    size: $enum("xs", "s", "l"),
    trueValue: $valueWithDefault(true),
    falseValue: $valueWithDefault(false),
    value: $valueWithDefault(true),
    on: { type: Boolean }
  },
  mounted() {
    const formItem = this.formItem;
    if (formItem) {
      formItem.setCheck(true);
    }
  },
  computed: {
    classes() {
      return {
        "fd-toggle": true,
        [`fd-toggle--${this.size}`]: this.size != null,
        "fd-form__control": true
      };
    }
  }
};
</script>
