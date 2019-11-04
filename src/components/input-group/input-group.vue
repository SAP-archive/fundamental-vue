<template>
  <div class="fd-input-group">
    <slot name="before" />
    <slot name="before-input" />
    <slot name="input" />
    <slot name="after-input" />
    <slot name="after" />
  </div>
</template>

<script>
export default {
  name: 'FdInputGroup'
}
</script>
