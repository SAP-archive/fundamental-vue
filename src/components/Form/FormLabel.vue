<template>
  <label class="fd-form__label" :aria-required="String(required)">
    <slot name="control" />
    <slot />
    <template v-if="required"
      >*</template
    >
  </label>
</template>

<script>
export default {
  name: "FdFormLabel",
  props: {
    inline: {
      type: Boolean,
      default: false
    },
    required: {
      default: false,
      type: Boolean
    }
  },
  inject: {
    itemId: { default: null }
  }
};
</script>
