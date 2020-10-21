<template>
  <div class="fd-dialog__content" role="dialog" aria-modal="true" :aria-labelledby="dialogName">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'FdDialogContent',
  props: {
    dialogName: {
      type: String,
      required: true
    }
  }
}
</script>
