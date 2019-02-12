<template>
  <span :class="classes">
    <slot />
  </span>
</template>

<script lang="ts">
import Vue from "vue";
import { PropValidator } from "vue/types/options";

const typeMapping = {
  warning: "warning",
  error: "error",
  success: "success"
};
type BadgeType = keyof (typeof typeMapping);
const BadgeTypes = Object.keys(typeMapping);
const BadgeTypeIsValid = (value: string) => BadgeTypes.indexOf(value) >= 0;

export default Vue.extend({
  name: "FdBadge",
  props: {
    filled: { type: Boolean, default: false },
    pill: { type: Boolean, default: false },
    type: {
      type: String,
      default: null,
      validator: BadgeTypeIsValid
    } as PropValidator<BadgeType | null>
  },
  computed: {
    classes(): object {
      const type =
        this.type == null ? {} : { [`fd-badge--${this.type}`]: true };
      return {
        "fd-badge": true,
        "fd-badge--filled": this.filled,
        "fd-badge--pill": this.pill,
        ...type
      };
    }
  }
});
</script>
