<template>
  <div :class="classes"><slot /></div>
</template>

<script>
export default {
  name: 'FdDialogBar',
  props: {
    aligment: {
      type: String,
      default: 'left',
      validate(value) {
        return value === 'left' || value === 'right'
      }
    }
  },
  computed: {
    classes() {
      return {
        'fd-bar__left': this.aligment === 'left',
        'fd-bar__right': this.aligment === 'right'
      }
    }
  }
}
</script>
