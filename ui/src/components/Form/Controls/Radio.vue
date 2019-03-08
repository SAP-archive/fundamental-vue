<template>
  <input
    type="radio"
    class="fd-form__control"
    :class="inputClasses"
    :id="inputId"
    :disabled="disabled ? '' : null"
    :checked="checked ? true : false"
    :value="value"
    @input="$emit('update', $event.target.value, $event)"
    v-on="$listeners"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { mixins } from "@/mixins";
import InputMixin from "./InputMixin";
import { $valueWithDefault, $modelValueWithDefault } from "./Helper/prop";

export default mixins(InputMixin).extend({
  name: "FdRadio",
  inheritAttrs: false,
  model: {
    prop: "modelValue",
    event: "update"
  },
  inject: {
    // We need the form item so that we can say tell the form item
    // to render the checked-style
    formItem: { default: null }
  },
  props: {
    value: $valueWithDefault(false),
    modelValue: $modelValueWithDefault(false)
  },
  mounted() {
    // @ts-ignore
    const formItem = this.formItem;
    if (formItem) {
      formItem.setCheck(true);
    }
  },
  computed: {
    checked(): boolean {
      return this.modelValue === this.value;
    }
  }
});
</script>
