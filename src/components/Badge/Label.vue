<template>
    <span :class="[ {'fd-label' : true}, type ? 'fd-label--' + type : '']">
        <slot></slot>
    </span>
</template>

<script>
export default {
  name: "Label",
  props: {
    type: {
      default: "",
      type: String
    }
  }
};
</script>

<style scoped>
</style>
