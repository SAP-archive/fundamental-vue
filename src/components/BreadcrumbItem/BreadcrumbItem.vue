<template>
  <li class="fd-breadcrumb__item">
    <a
      class="fd-breadcrumb__link"
      @click="pushLocationIfPossible"
      v-bind="attrs"
      v-on="$listeners"
    >
      <slot />
    </a>
  </li>
</template>

<script>
import { withTargetLocation } from "./../../mixins";
export default {
  mixins: [withTargetLocation()],
  name: "FdBreadcrumbItem",
  inheritAttrs: false,
  computed: {
    attrs() {
      return {
        href: "#",
        ...this.$attrs
      };
    }
  }
};
</script>
