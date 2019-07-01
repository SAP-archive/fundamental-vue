<template>
  <div class="fd-app">
    <!-- Slot for the navigation – use the `fd-app-navigation`-component -->
    <slot name="navigation" />
    <!-- Slot for the main app content – use the `fd-app-main`-component -->
    <slot name="main" />
  </div>
</template>

<script>
export default {
  name: "FdApp"
};
</script>
