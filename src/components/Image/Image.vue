<template>
    <span :class="[ size ? 'fd-image--' + size : '', {'fd-image--circle' : isCircle}]" :style="{ backgroundImage: 'url(' + url + ')' }">
    </span>
</template>

<script>
export default {
  name: "Img",
  props: {
      size: {
          default: '',
          type: String
      },
      isCircle: {
          default: false,
          type: Boolean
      },
      url: {
          default: '',
          type: String
      }
  }
};
</script>

<style scoped></style>
