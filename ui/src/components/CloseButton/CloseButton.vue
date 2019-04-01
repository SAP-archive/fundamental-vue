<template>
  <button @click="onClose" v-if="visible" :aria-label="dismissLabel">
    <slot />
  </button>
</template>

<script>
import Vue from "vue";

export default {
  name: "FdCloseButton",
  props: {
    onClose: { type: Function, required: true },
    visible: { type: Boolean, default: true },
    dismissLabel: { type: String, default: "Close" }
  }
};
</script>
