<template>
  <span :class="classes">
    <slot />
  </span>
</template>

<script>
const typeMapping = {
  warning: "warning",
  error: "error",
  success: "success"
};
const LabelTypes = Object.keys(typeMapping);
const isValidLabelType = value => LabelTypes.indexOf(value) >= 0;

export default {
  name: "FdLabel",
  props: {
    type: { type: String, default: null, validator: isValidLabelType }
  },
  computed: {
    classes() {
      const type = this.type == null ? {} : { [`fd-label--${this.type}`]: true };
      return {
        "fd-label": true,
        ...type
      };
    }
  }
};
</script>
