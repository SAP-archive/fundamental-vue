<template>
  <span class="fd-product-switcher__product-icon" v-on="$listeners">
    <slot>
      <img :src="src" v-bind="$attrs" />
    </slot>
  </span>
</template>

<script>
export default {
  name: "FdShellBarProductSwitcherItemImg",
  inheritAttrs: false,
  props: {
    src: String
  }
};
</script>
