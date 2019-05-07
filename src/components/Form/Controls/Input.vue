<template>
  <textarea
    v-if="type === 'textarea'"
    :class="inputClasses"
    :id="inputId"
    :readonly="readonly ? '' : null"
    :disabled="disabled ? '' : null"
    :placeholder="placeholder"
    :value="value"
    @input="$emit('update', $event.target.value)"
    @change="$emit('change', $event.target.value)"
    v-on="$listeners"
    v-bind="$attrs"
  />
  <input
    v-else
    class="fd-input fd-form__control"
    :class="inputClasses"
    :id="inputId"
    :readonly="readonly ? '' : null"
    :disabled="disabled ? '' : null"
    :type="type"
    :placeholder="placeholder"
    :value="value"
    @input="$emit('update', $event.target.value)"
    @change="$emit('change', $event.target.value)"
    v-on="$listeners"
    v-bind="$attrs"
  />
</template>

<script>
import InputMixin from "./InputMixin";
import { $default, $valueWithDefault } from "./Helper/prop";

export default {
  name: "FdInput",
  mixins: [InputMixin],
  model: {
    event: "update"
  },
  props: {
    placeholder: $default(""),
    type: $default("text"),
    value: $valueWithDefault("")
  }
};
</script>
