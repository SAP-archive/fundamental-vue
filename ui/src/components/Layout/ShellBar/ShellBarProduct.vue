<template>
  <div class="fd-shellbar__product">
    <FdShellBarProductTitle v-if="productTitle != null">{{
      productTitle
    }}</FdShellBarProductTitle>
    <slot />
  </div>
</template>

<script>
export default {
  name: "FdShellBarProduct",
  props: { productTitle: { type: String, default: null } }
};
</script>
