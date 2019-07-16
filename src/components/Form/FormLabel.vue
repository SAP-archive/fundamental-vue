<template>
  <label class="fd-form__label" :for="itemId" :aria-required="String(required)">
    <slot name="control" />
    <slot />
    <template v-if="required">
      *
    </template>
  </label>
</template>

<script>
export default {
  name: "FdFormLabel",
  inject: {
    itemId: { default: null }
  },
  props: {
    inline: {
      type: Boolean,
      default: false
    },
    required: {
      default: false,
      type: Boolean
    }
  }
};
</script>
