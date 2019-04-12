<template>
  <div class="fd-spinner" aria-hidden="false" :aria-label="ariaLabel">
    <div />
  </div>
</template>

<script>
export default {
  name: "FdSpinner",
  props: {
    ariaLabel: { type: String, default: "Loading" }
  }
};
</script>
