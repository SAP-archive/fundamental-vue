<template>
  <a class="fd-shellbar__logo">
    <slot>
      <FdShellBarLogoImage :src="src" :srcset="srcset" />
    </slot>
  </a>
</template>

<script>
import FdShellBarLogoImage from './logo-image.vue'

export default {
  name: 'FdShellBarLogo',
  components: { FdShellBarLogoImage },
  props: {
    src: String,
    srcset: String
  }
}
</script>
