<template>
  <div :class="classes">
    <slot/>
  </div>
</template>

<script lang="ts">
const PANEL_GRID_CLASS = "fd-panel-grid";

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
    classes(): string[] {
      const col = this.col;
      return [
        PANEL_GRID_CLASS,
        ...(col != null ? [`${PANEL_GRID_CLASS}--${col}col`] : []),
        ...(this.nogap ? [`${PANEL_GRID_CLASS}--nogap`] : [])
      ];
    }
  }
});
</script>
