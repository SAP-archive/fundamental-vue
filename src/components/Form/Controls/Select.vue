<template>
  <select
    :class="inputClasses"
    :readonly="readonly ? '' : null"
    :disabled="disabled ? '' : null"
    :value="value"
    @change="$emit('update', $event.target.value)"
    v-on="$listeners"
    v-bind="$attrs"
    :id="inputId"
  >
    <slot />
  </select>
</template>

<script>
import InputMixin from "./InputMixin";
import { $valueWithDefault } from "./Helper/prop";

export default {
  name: "FdSelect",
  mixins: [InputMixin],
  inheritAttrs: false,
  model: {
    event: "update"
  },
  props: {
    value: $valueWithDefault("")
  }
};
</script>
