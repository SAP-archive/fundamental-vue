<template>
  <span :class="classes" :style="style">
    <slot />
  </span>
</template>

<script lang="ts">
import Vue from "vue";

const sizeMapping = {
  s: "s",
  m: "m", // default
  l: "l"
};
const IdentifierSizes = Object.keys(sizeMapping);

export default Vue.extend({
  name: "FdImage",
  props: {
    url: { type: String, default: null },
    size: {
      type: String,
      default: sizeMapping.m,
      validator: (value: string) => IdentifierSizes.indexOf(value) >= 0
    },
    circle: { type: Boolean, default: false }
  },
  computed: {
    style(): object {
      const url = this.url;
      if (url == null) {
        return {};
      }
      return {
        backgroundImage: `url(${this.url})`
      };
    },
    classes(): object {
      return {
        [`fd-image--${this.size}`]: true,
        "fd-image--circle": this.circle
      };
    }
  }
});
</script>
