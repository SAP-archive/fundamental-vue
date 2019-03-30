<template>
  <div class="fd-time__input">
    <input
      @input="$emit('update', $event.target.value)"
      class="fd-form__control"
      maxlength="2"
      type="text"
      :value="value"
      v-bind="$attrs"
      v-on="$listeners"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  inheritAttrs: false,
  name: "FdTimeInput",
  props: ["value"]
});
</script>
