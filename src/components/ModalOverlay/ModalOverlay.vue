<template>
  <transition name="fdv-overlay" @after-enter="$emit('after-enter')">
    <div v-show="visible" class="fd-ui__overlay fd-overlay fd-overlay--modal">
      <slot />
    </div>
  </transition>
</template>

<script>
// This component is used to render the translucent modal background that covers the whole screen.
export default {
  name: "FdModalOverlay",
  props: {
    // True if the overlay is visible – otherwise false.
    visible: { type: Boolean, default: false }
  }
};
</script>
