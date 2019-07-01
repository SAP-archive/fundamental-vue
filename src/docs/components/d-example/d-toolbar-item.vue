<template>
  <fd-button compact v-on="$listeners" :icon="icon" styling="light">
    <slot />
  </fd-button>
</template>

<script>
export default {
  props: {
    icon: String
  }
};
</script>
