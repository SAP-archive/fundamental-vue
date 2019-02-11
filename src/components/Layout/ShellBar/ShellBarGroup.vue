<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

const positionMapping = {
  start: "start",
  middle: "middle",
  end: "end"
};
type Position = keyof typeof positionMapping;
const Positions = Object.keys(positionMapping) as Position[];
const isPosition = (value: any) => Positions.indexOf(value) >= 0;

export default Vue.extend({
  name: "FdShellBarGroup",
  props: {
    position: { type: String, validator: isPosition }
  },
  computed: {
    classes(): string[] {
      return [`fd-shellbar__group fd-shellbar__group--${this.position}`];
    }
  }
});
</script>
