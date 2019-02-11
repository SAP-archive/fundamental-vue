<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "FdCol",
  props: {
    span: { type: Number, default: null }
  },
  computed: {
    classes(): object {
      const colClass = "fd-col";
      const span = this.span;
      if (span != null) {
        return [colClass, `fd-col--${span}`];
      }
      return [colClass];
    }
  }
});
</script>
