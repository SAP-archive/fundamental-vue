<template>
  <li class="fd-breadcrumb__item">
    <a class="fd-breadcrumb__link" @click="pushLocationIfPossible" v-bind="attrs" v-on="$listeners">
      <!-- Anchor tag content -->
      <slot />
    </a>
  </li>
</template>

<script>
import { withTargetLocation } from "./../../mixins";
// A breadcrumb item renders a single items and is used in combination with `fd-breadcrumb`. All attributes will be passed down to the anchor-tag that is rendered on your behalf.
export default {
  name: "FdBreadcrumbItem",
  inheritAttrs: false,
  mixins: [withTargetLocation()],
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
