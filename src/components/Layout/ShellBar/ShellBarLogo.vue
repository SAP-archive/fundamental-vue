<template>
  <a class="fd-shellbar__logo" href="#" @click.prevent="pushLocationIfPossible">
    <img :src="src" :srcset="srcset">
  </a>
</template>

<script lang="ts">
import { withTargetLocation, mixins } from "@/mixins";

export default mixins(withTargetLocation("/")).extend({
  name: "FdShellBarLogo",
  props: {
    src: {
      type: String,
      required: true
    },
    srcset: {
      type: String,
      default: null
    }
  }
});
</script>
