<template>
  <section class="fd-section">
    <slot name="header" />
    <slot />
  </section>
</template>

<script>
export default {
  name: "FdSection"
};
</script>
