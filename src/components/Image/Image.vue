<template>
  <span :class="classes" :style="style">
    <slot />
  </span>
</template>

<script>
const sizeMapping = {
  s: "s",
  m: "m", // default
  l: "l"
};
const IdentifierSizes = Object.keys(sizeMapping);

export default {
  name: "FdImage",
  props: {
    url: { type: String, default: null },
    size: {
      type: String,
      default: sizeMapping.m,
      validator: value => IdentifierSizes.indexOf(value) >= 0
    },
    circle: { type: Boolean, default: false }
  },
  computed: {
    style() {
      const url = this.url;
      if (url == null) {
        return {};
      }
      return {
        backgroundImage: `url(${this.url})`
      };
    },
    classes() {
      return {
        [`fd-image--${this.size}`]: true,
        "fd-image--circle": this.circle
      };
    }
  }
};
</script>
