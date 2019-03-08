<template>
  <span :class="classes" :role="role" :style="style">
    <slot />
  </span>
</template>

<script lang="ts">
import { Icon, mixins } from "@/mixins";
import { PropOptions } from "vue";
import { Colors, backgroundColorClasses } from "@/lib";

const identifierSizes = ["xxs", "xs", "s", "m", "l", "xl", "xxl"];
const identifierSizeValidator = (size: string) => {
  return identifierSizes.indexOf(size) >= 0;
};

export default mixins(Icon).extend({
  name: "FdIdentifier",
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
    backgroundColor: {
      default: null,
      type: String,
      validator: (value: string) => (Colors as string[]).indexOf(value) >= 0
    } as PropOptions<string | null>
  },
  computed: {
    role(): string | null {
      return this.icon != null ? "presentation" : null;
    },
    classes(): string[] {
      return [
        ...this.iconClasses,
        ...backgroundColorClasses(this.backgroundColor),
        `fd-identifier--${this.size}`,
        ...(this.transparent ? ["fd-identifier--transparent"] : []),
        ...(this.circle ? ["fd-identifier--circle"] : []),
        ...(this.thumbnail ? ["fd-identifier--thumbnail"] : [])
      ];
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
