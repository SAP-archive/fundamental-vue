<template>
  <span :class="classes" role="presentation" :style="style">
    <slot />
  </span>
</template>

<script lang="ts">
import Vue from "vue";
import { PropValidator } from "vue/types/options";
import { Color, Colors, backgroundColorClassName } from "@/lib";

const sizes = [
  "xxs",
  "xs",
  "s",
  "m", // default
  "l",
  "xl",
  "xxl"
];

const isValidIdentifierSize = (size: string) => {
  return sizes.indexOf(size) >= 0;
};

export default Vue.extend({
  name: "FdIdentifier",
  props: {
    icon: { type: String, default: null },
    url: { type: String, default: null },
    size: {
      type: String,
      default: "m",
      validator: isValidIdentifierSize
    },
    circle: { type: Boolean, default: false },
    transparent: { type: Boolean, default: false },
    thumbnail: { type: Boolean, default: false },
    backgroundColor: {
      default: null,
      type: String,
      validator: (value: string) => (Colors as string[]).indexOf(value) >= 0
    } as PropValidator<Color | null>
  },
  computed: {
    classes(): object {
      const backgroundColorClasses =
        this.backgroundColor == null
          ? {}
          : { [backgroundColorClassName(this.backgroundColor)]: true };
      const iconClass =
        this.icon == null ? {} : { [`sap-icon--${this.icon}`]: true };
      return {
        ...iconClass,
        ...backgroundColorClasses,
        [`fd-identifier--${this.size}`]: true,
        "fd-identifier--transparent": this.transparent,
        "fd-identifier--circle": this.circle,
        "fd-identifier--thumbnail": this.thumbnail
      };
    },
    style(): object {
      const url = this.url;
      if (url == null || !this.thumbnail) {
        return {};
      }
      return {
        backgroundImage: `url(${this.url})`
      };
    }
  }
});
</script>
