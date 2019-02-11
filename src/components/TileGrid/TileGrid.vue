<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { PropValidator } from "vue/types/options";

export default Vue.extend({
  name: "FdTileGrid",
  props: {
    col: {
      type: Number,
      default: null,
      validator: (value: number) => value >= 2 && value <= 6
    } as PropValidator<number>
  },
  computed: {
    classes(): object {
      const col = this.col;
      const colClass = col == null ? {} : { [`fd-tile-grid--${col}col`]: true };
      return {
        "fd-tile-grid": true,
        ...colClass
      };
    }
  }
});
</script>
