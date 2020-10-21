<template>
  <button v-on="$listeners" class="fd-dialog__decisive-button fd-button fd-button--compact">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'FdDialogButton'
}
</script>
