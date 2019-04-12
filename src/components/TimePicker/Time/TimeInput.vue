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

<script>
export default {
  inheritAttrs: false,
  name: "FdTimeInput",
  props: ["value"]
};
</script>
