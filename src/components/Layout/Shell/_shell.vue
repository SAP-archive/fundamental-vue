<template>
  <div class="fd-shell fd-shell--fundamentals">
    <!-- Slot for the header – use the `fd-shell-header`-component -->
    <slot name="header" />
    <!-- Slot for the app – use the `fd-shell-app`-component -->
    <slot name="app" />
    <!-- Slot for the footer – use the `fd-shell-footer`-component -->
    <slot name="footer" />
  </div>
</template>

<script>
export default {
  name: "FdShell"
};
</script>
