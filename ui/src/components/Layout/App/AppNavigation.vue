<template>
  <div :class="classes"><slot /></div>
</template>

<script lang="ts">
import Vue from "vue";
const orientationMapping = {
  horizontal: "horizontal", // default
  vertical: "vertical"
};
type Orientation = keyof typeof orientationMapping;
const Orientations = Object.keys(orientationMapping) as Orientation[];
const isOrientation = (value: any) => Orientations.indexOf(value) >= 0;

const APP_NAV_CLASS = "fd-app__navigation";

export default Vue.extend({
  name: "FdAppNavigation",
  props: {
    orientation: {
      type: String,
      default: orientationMapping.horizontal,
      validator: isOrientation
    }
  },
  computed: {
    classes(): string[] {
      return [APP_NAV_CLASS, `${APP_NAV_CLASS}--${this.orientation}`];
    }
  }
});
</script>
