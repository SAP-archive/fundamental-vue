<template>
  <a class="fd-shellbar__logo" href="#" @click.prevent="pushLocationIfPossible" v-on="$listeners">
    <slot>
      <img :src="src" :srcset="srcset" v-bind="$attrs" />
    </slot>
  </a>
</template>

<script lang="ts">
import { withTargetLocation, mixins } from "@/mixins";

export default mixins(withTargetLocation("/")).extend({
  name: "FdShellBarLogo",
  inheritAttrs: false,
  props: {
    src: String,
    srcset: String
  }
});
</script>
