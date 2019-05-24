<template>
  <div v-show="visible" class="fd-ui__overlay fd-overlay fd-overlay--modal">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    visible: { type: Boolean, default: false }
  }
};
</script>
