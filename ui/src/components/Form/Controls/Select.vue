<template>
  <select
    class="fd-form__control"
    :class="inputClasses"
    :id="inputId"
    :readonly="readonly ? '' : null"
    :disabled="disabled ? '' : null"
    :type="type"
    :placeholder="placeholder"
    :value="value"
    @change="$emit('update', $event.target.value)"
    v-on="$listeners"
    v-bind="$attrs"
  >
    <slot />
  </select>
</template>

<script lang="ts">
import { mixins } from "@/mixins";
import InputMixin from "./InputMixin";
import { $valueWithDefault } from "./Helper/prop";

export default mixins(InputMixin).extend({
  name: "FdSelect",
  inheritAttrs: false,
  model: {
    event: "update"
  },
  props: {
    value: $valueWithDefault("")
  }
});
</script>
