<template>
  <li class="fd-breadcrumb__item">
    <a class="fd-breadcrumb__link" @click="pushLocationIfPossible" v-bind="attrs" v-on="$listeners">
      <slot/>
    </a>
  </li>
</template>

<script lang="ts">
import { withTargetLocation, mixins } from "@/mixins";

export default mixins(withTargetLocation()).extend({
  name: "FdBreadcrumbItem",
  inheritAttrs: false,
  computed: {
    attrs(): object {
      return {
        href: "#",
        ...this.$attrs
      };
    }
  }
});
</script>
