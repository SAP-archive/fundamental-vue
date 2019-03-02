<template>
  <span class="fd-product-switcher__product-icon" v-on="$listeners">
    <slot>
      <img :src="src" v-bind="$attrs" />
    </slot>
  </span>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "FdShellBarProductSwitcherItemImg",
  inheritAttrs: false,
  props: {
    src: String
  }
});
</script>
