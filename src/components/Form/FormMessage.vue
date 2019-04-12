<template>
  <span :class="classes">
    <slot />
  </span>
</template>

<script>
const typeMapping = {
  error: "error",
  warning: "warning",
  help: "help"
};
const MessageTypes = Object.keys(typeMapping);
const isMessageType = value => MessageTypes.indexOf(value) >= 0;

export default {
  name: "FdFormMessage",
  props: {
    type: { default: null, type: String, validator: isMessageType }
  },
  computed: {
    classes() {
      const staticClass = "fd-form__message";
      return {
        [staticClass]: true,
        [`${staticClass}--${this.type || ""}`]: this.type != null
      };
    }
  }
};
</script>
