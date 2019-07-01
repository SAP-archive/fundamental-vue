<template>
  <div class="fd-shell__app">
    <!-- Slot for the root application content – use the `fd-app`-component -->
    <slot />
  </div>
</template>

<script>
export default {
  name: "FdShellApp"
};
</script>
