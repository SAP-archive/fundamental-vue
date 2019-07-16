<template>
  <span :class="classes" role="presentation" />
</template>

<script>
const IsValidSize = value => ["s", "m", "l", "xl"].indexOf(value) >= 0;

export default {
  name: "FdIcon",
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: null,
      validator: IsValidSize
    }
  },
  computed: {
    classes() {
      const size = this.size == null ? {} : { [`sap-icon--${this.size}`]: true };
      return {
        [`sap-icon--${this.name}`]: true,
        ...size
      };
    }
  }
};
</script>
