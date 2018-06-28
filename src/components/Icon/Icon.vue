<template>
    <span :class="[ glyph ? 'sap-icon--' + glyph : '',  size ? 'sap-icon--' + size : '']">
        <slot></slot>
    </span>
</template>

<script>
export default {
  name: "Icon",
  props: {
      glyph: {
          default: '',
          type: String,
          required: true
      },
      size: {
          default: '',
          type: String
      }
  }
};
</script>

<style scoped>
    span {
        margin-right: 10px;
    }
</style>
