<template>
  <a class="fd-shellbar__logo" href="#" @click="onClick">
    <img :src="src" :srcset="srcset">
  </a>
</template>

<script lang="ts">
import Vue from "vue";
import { warn } from "@/core";

export default Vue.extend({
  name: "FdShellBarLogo",
  props: {
    // TODO: Don't do that. Let's simply stop inheriting attributes and target the
    // <img> with the $attrs-helper.
    src: {
      type: String,
      required: true
    },
    srcset: {
      type: String,
      default: null
    },
    to: {
      type: [String, Object],
      default: "/"
    }
  },
  methods: {
    onClick(event: MouseEvent) {
      event.preventDefault();
      const { to, $router } = (this as any);
      if (to != null) {
        if ($router != null) {
          // @ts-ignore
          $router.push(to);
        } else {
          warn(`Tried to navigate to ${to} but $router not found.`);
        }
      }
      this.$emit("click", this);
    }
  },
});
</script>
