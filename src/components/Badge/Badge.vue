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
const BadgeTypes = Object.keys(typeMapping);
const BadgeTypeIsValid = value => BadgeTypes.indexOf(value) >= 0;

export default {
  name: "FdBadge",
  props: {
    filled: { type: Boolean, default: false },
    pill: { type: Boolean, default: false },
    type: {
      type: String,
      default: null,
      validator: BadgeTypeIsValid
    }
  },
  computed: {
    classes() {
      const type =
        this.type == null ? {} : { [`fd-badge--${this.type}`]: true };
      return {
        "fd-badge": true,
        "fd-badge--filled": this.filled,
        "fd-badge--pill": this.pill,
        ...type
      };
    }
  }
};
</script>
