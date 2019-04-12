<template>
  <span :class="classes" :ariaLabel="ariaLabel">{{ formattedValue }}</span>
</template>

<script>
const typeMapping = {
  info: "info",
  notification: "notification"
};

const counterTypeValues = Object.keys(typeMapping);

export default {
  name: "FdCounter",
  props: {
    type: {
      type: String,
      default: "info",
      acceptableValues: counterTypeValues,
      validator: value => counterTypeValues.indexOf(value) >= 0
    },
    ariaLabel: String,
    value: { type: Number, default: 0 }
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
        "fd-counter": true,
        "fd-counter--notification": this.type === "notification"
      };
    }
  }
};
</script>
