<template>
  <span :class="classes">
    <slot/>
  </span>
</template>

<script lang="ts">
import Vue from "vue";

const typeMapping = {
  warning: "warning",
  error: "error",
  success: "success"
};
const LabelTypes = Object.values(typeMapping);
const isValidLabelType = (value: string) => LabelTypes.indexOf(value) >= 0;

export default Vue.extend({
  name: "FdLabel",
  props: {
    type: { type: String, default: null, validator: isValidLabelType }
  },
  computed: {
    classes(): object {
      const type =
        this.type == null ? {} : { [`fd-label--${this.type}`]: true };
      return {
        "fd-label": true,
        ...type
      };
    }
  }
});
</script>

