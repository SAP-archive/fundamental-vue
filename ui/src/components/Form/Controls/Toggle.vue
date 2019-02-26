<template>
  <span :class="classes">
    <FdCheckbox
      v-on="$listeners"
      v-bind="$attrs"
      :modelValue="on"
      :value="value"
      :disabled="disabled"
      @update="$emit('update', $event)"
    >
    </FdCheckbox>
    <span class="fd-toggle__switch" role="presentation" />
  </span>
</template>

<script lang="ts">
import InputMixin from "./InputMixin";
import { mixins } from "@/mixins";
import FdCheckbox from "./Checkbox.vue";
import { $valueWithDefault, $enum } from "./Helper/prop";

export default mixins(InputMixin).extend({
  name: "FdToggle",
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
    // @ts-ignore
    const formItem = this.formItem;
    if (formItem) {
      formItem.setCheck(true);
    }
  },
  computed: {
    classes(): object {
      return {
        "fd-toggle": true,
        [`fd-toggle--${this.size}`]: this.size != null,
        "fd-form__control": true
      };
    }
  }
});
</script>
