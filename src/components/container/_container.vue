<template>
  <div class="fd-container" :class="classes">
    <!-- Content – or 0…12 instances of `fd-col` -->
    <slot />
  </div>
</template>

<script>
// Container component – should contains `fd-col`-instances.
export default {
  name: "FdContainer",
  props: {
    // If `true`, the container will act as a flexbox.
    flex: { type: Boolean, default: false },
    fluid: { type: Boolean, default: false },
    // If `true`, the wrapper is centered within it's parent.
    centered: { type: Boolean, default: false }
  },
  computed: {
    classes() {
      return {
        "fd-container--flex": this.flex,
        "fd-container--fluid": this.fluid,
        "fd-container--centered": this.centered
      };
    }
  }
};
</script>
