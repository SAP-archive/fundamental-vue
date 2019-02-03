<template>
  <span :class="classes"/>
</template>

<script lang="ts">
import Vue from "vue";
import { PropValidator } from "vue/types/options";

const sizeMapping = {
  s: "s",
  m: "m",
  l: "l",
  xl: "xl"
};
type IconSize = keyof (typeof sizeMapping);
export const IconSizes = Object.values(sizeMapping);
const IsValidSize = (value: string) => IconSizes.indexOf(value) >= 0;

export default Vue.extend({
  name: "FdIcon",
  props: {
    name: {
      type: String,
      required: true
    } as PropValidator<string>,
    size: {
      type: String,
      default: null,
      validator: IsValidSize
    } as PropValidator<IconSize | null>
  },
  computed: {
    classes(): object {
      const size = this.size == null ? {} : { [`sap-icon--${this.size}`]: true };
      return {
        [`sap-icon--${this.name}`]: true,
        ...size
      };
    }
  }
});
</script>

