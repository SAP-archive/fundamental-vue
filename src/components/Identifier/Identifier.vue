<template>
  <span :class="classes" :role="role" :style="style" v-on="$listeners">
    <slot />
  </span>
</template>

<script>
import { Icon } from "./../../mixins";
import { backgroundColorClasses } from "./../../lib";

const identifierSizes = ["xxs", "xs", "s", "m", "l", "xl", "xxl"];
const identifierSizeValidator = size => identifierSizes.indexOf(size) >= 0;

export default {
  name: "FdIdentifier",
  mixins: [Icon],
  props: {
    url: String,
    size: {
      type: String,
      default: "m",
      validator: identifierSizeValidator
    },
    circle: { type: Boolean, default: false },
    transparent: { type: Boolean, default: false },
    thumbnail: { type: Boolean, default: false },
    backgroundColor: String
  },
  computed: {
    role() {
      return this.icon != null ? "presentation" : null;
    },
    classes() {
      return [
        ...this.iconClasses,
        ...backgroundColorClasses(this.backgroundColor),
        `fd-identifier--${this.size}`,
        ...(this.transparent ? ["fd-identifier--transparent"] : []),
        ...(this.circle ? ["fd-identifier--circle"] : []),
        ...(this.thumbnail ? ["fd-identifier--thumbnail"] : [])
      ];
    },
    style() {
      const url = this.url;
      if (url == null || !this.thumbnail) {
        return {};
      }
      return {
        backgroundImage: `url('${this.url}')`
      };
    }
  }
};
</script>
