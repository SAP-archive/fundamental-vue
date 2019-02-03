<template>
  <div :class="classes">
    <slot/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "FdPanelGrid",
  props: {
    col: {
      type: Number,
      default: null,
      validator: (value: number) => value >= 2 && value <= 6
    },
    nogap: { type: Boolean, default: false }
  },
  computed: {
    classes(): object {
      const col = this.col;
      const colClass =
        col == null ? {} : { [`fd-panel-grid--${col}col`]: true };
      return {
        "fd-panel-grid": true,
        "fd-panel-grid--nogap": this.nogap,
        ...colClass
      };
    }
  }
});
</script>
