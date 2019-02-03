<template>
  <span :class="classes">
    <slot/>
  </span>
</template>

<script lang="ts">
import Vue from "vue";

const typeMapping = {
  error: "error",
  warning: "warning",
  help: "help"
};
const MessageTypes = Object.values(typeMapping);
const isMessageType = (value: string) => MessageTypes.indexOf(value) >= 0;

export default Vue.extend({
  name: "FdFormMessage",
  props: {
    type: { default: null, type: String, validator: isMessageType }
  },
  computed: {
    classes(): object {
      return {
        "fd-form__message": true,
        "fd-form__message--error": this.type === "error",
        "fd-form__message--warning": this.type === "warning",
        "fd-form__message--help": this.type === "help"
      };
    }
  }
});
</script>

