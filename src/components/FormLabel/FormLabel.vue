<template>
  <label class="fd-form__label" :aria-required="String(required)">
    <slot />
    <template v-if="required">
      <slot name="required">*</slot>
    </template>
  </label>
</template>

<script>
export default {
  name: "FdFormLabel",
  props: {
    required: {
      type: Boolean,
      default: false
    }
  }
};
</script>
