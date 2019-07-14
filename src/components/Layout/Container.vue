<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  name: "FdContainer",
  props: {
    flex: { type: Boolean, default: false },
    fluid: { type: Boolean, default: false },
    centered: { type: Boolean, default: false }
  },
  computed: {
    classes() {
      return {
        "fd-container": true,
        "fd-container--flex": this.flex,
        "fd-container--fluid": this.fluid,
        "fd-container--centered": this.centered
      };
    }
  }
};
</script>
