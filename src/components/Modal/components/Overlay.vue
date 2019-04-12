<template>
  <div
    class="fd-ui__overlay fd-overlay fd-overlay--modal"
    :aria-hidden="String(!visible)"
    v-show="visible"
  >
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
