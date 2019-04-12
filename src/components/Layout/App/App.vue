<template>
  <div class="fd-shell__app">
    <slot name="header" />
    <div class="fd-app">
      <slot />
    </div>
    <slot name="footer" />
  </div>
</template>

<script>
export default {
  name: "FdApp"
};
</script>
