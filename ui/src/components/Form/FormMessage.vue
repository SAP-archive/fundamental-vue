<template>
  <span :class="classes">
    <slot />
  </span>
</template>

<script lang="ts">
import Vue from "vue";

const typeMapping = {
  error: "error",
  warning: "warning",
  help: "help"
};
const MessageTypes = Object.keys(typeMapping);
const isMessageType = (value: string) => MessageTypes.indexOf(value) >= 0;

export default Vue.extend({
  name: "FdFormMessage",
  props: {
    type: { default: null, type: String, validator: isMessageType }
  },
  computed: {
    classes(): object {
      const staticClass = "fd-form__message";
      return {
        [staticClass]: true,
        [`${staticClass}--${this.type || ""}`]: this.type != null
      };
    }
  }
});
</script>
