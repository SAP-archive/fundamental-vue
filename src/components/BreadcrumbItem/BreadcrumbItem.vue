<template>
  <li class="fd-breadcrumb__item">
    <a class="fd-breadcrumb__link" href="#" @click.prevent="onClick"><slot /></a>
  </li>
</template>

<script lang="ts">
import Vue from "vue";
import { PropValidator } from "vue/types/options";
import { warn } from "@/core";

export default Vue.extend({
  name: "FdBreadcrumbItem",
  props: {
    to: { type: Object, default: null } as PropValidator<object | null>
  },
  data() {
    return {};
  },
  methods: {
    click(event: Event) {
      event.preventDefault();
      const { to, $router } = (this as any);
      if (to != null) {
        if ($router != null) {
          $router.push(to);
        } else {
          warn(`Tried to navigate to ${to} but $router not found.`);
        }
      }
      this.$emit("click", this);
    }
  }
});
</script>

