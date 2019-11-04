<template functional>
  <img :src="props.src" :srcset="props.srcset" :width="props.width" :height="props.height" />
</template>

<script>
export default {
  name: 'FdShellBarLogoImage',
  props: {
    src: String,
    srcset: String,
    width: {
      type: Number,
      default: 48
    },
    height: {
      type: Number,
      default: 24
    }
  }
}
</script>
