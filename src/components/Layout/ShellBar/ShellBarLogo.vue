<template>
  <a class="fd-shellbar__logo" href="#" @click.prevent="pushLocationIfPossible" v-on="$listeners">
    <slot>
      <img :src="src" :srcset="srcset" v-bind="$attrs" />
    </slot>
  </a>
</template>

<script>
import { withTargetLocation } from "./../../../mixins";

export default {
  name: "FdShellBarLogo",
  mixins: [withTargetLocation("/")],
  inheritAttrs: false,
  props: {
    src: String,
    srcset: String
  }
};
</script>
