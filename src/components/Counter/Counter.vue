<template>
  <span class="fd-counter" :class="classes">{{ formattedValue }}</span>
</template>

<script>
const counterTypeValues = ["info", "notification"];

// Component to display counts
export default {
  name: "FdCounter",
  props: {
    // Counter type
    type: {
      // `info` / `notification`
      type: String,
      // `info`
      default: "info",
      validator: value => counterTypeValues.indexOf(value) >= 0
    },
    // counter value
    value: {
      type: Number,
      // `0`
      default: 0
    }
  },
  computed: {
    formattedValue() {
      return !isNaN(Number(this.value))
        ? Number(this.value) <= 999
          ? String(this.value)
          : "999+"
        : "1";
    },
    classes() {
      return {
        "fd-counter--notification": this.type === "notification"
      };
    }
  }
};
</script>
