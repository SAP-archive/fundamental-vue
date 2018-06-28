<template>
    <span :class="[ size ? 'fd-identifier--' + size : '', glyph ? 'sap-icon--' + glyph : '', modifier ? 'fd-identifier--' + modifier : '', color ? 'fd-has-background-color-accent-' + color : '']" :role="label ? false : 'presentation'" :aria-label="label ? label : false">
        <slot />
    </span>
</template>

<script>
export default {
  name: "Identifier",
  props: {
      size: {
          default: '',
          type: String,
          required: true
      },
      modifier: {
          default: '',
          type: String
      },
      glyph: {
          default: '',
          type: String
      },
      color: {
          default: '',
          type: String
      },
      label: {
          default: '',
          type: String
      }
  }
};
</script>

<style scoped></style>
