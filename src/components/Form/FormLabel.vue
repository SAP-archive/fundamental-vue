<template>
  <label class="fd-form__label" v-bind="attributes">
    <slot />
    <template v-if="required"
      >*</template
    >
  </label>
</template>

<script>
export default {
  name: "FdFormLabel",
  inject: {
    itemId: { default: null }
  },
  computed: {
    attributes() {
      return {
        for: this.for,
        ariaRequired: this.required ? "true" : null,
        ...this.$attrs
      };
    },
    for() {
      return this.itemId;
    }
  },
  props: {
    required: {
      default: false,
      type: Boolean
    }
  }
};
</script>
