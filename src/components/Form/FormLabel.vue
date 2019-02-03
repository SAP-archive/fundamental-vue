<template>
  <label
  class="fd-form__label"
  v-bind="attributes">
    <slot/>
    <template v-if="required">*</template>
  </label>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "FdFormLabel",
  inject: {
    itemId: { default: null }
  },
  computed: {
    attributes(): object {
      return {
        for: this.for,
        ariaRequired: this.required ? 'true' : null,
        ...this.$attrs,
      };
    },
    for(): string | null {
      // @ts-ignore
      return this.itemId;
    }
  },
  props: {
    required: {
      default: false,
      type: Boolean
    }
  },
});
</script>
