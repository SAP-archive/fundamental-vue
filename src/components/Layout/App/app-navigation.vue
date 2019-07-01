<template>
  <div :class="classes"><slot /></div>
</template>

<script>
const orientationMapping = {
  horizontal: "horizontal", // default
  vertical: "vertical"
};
const Orientations = Object.keys(orientationMapping);
const isOrientation = value => Orientations.indexOf(value) >= 0;

const APP_NAV_CLASS = "fd-app__navigation";

export default {
  name: "FdAppNavigation",
  props: {
    orientation: {
      type: String,
      default: orientationMapping.horizontal,
      validator: isOrientation
    }
  },
  computed: {
    classes() {
      return [APP_NAV_CLASS, `${APP_NAV_CLASS}--${this.orientation}`];
    }
  }
};
</script>
