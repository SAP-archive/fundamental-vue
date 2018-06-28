<template>
    <span :class="[ {'fd-badge' : true}, type ? 'fd-badge--' + type : '', modifier ? 'fd-badge--' + modifier : '']">
        <slot></slot>
    </span>
</template>



<script>
export default {
  name: "Badge",
  props: {
    type: {
      default: "",
      type: String
    },
    modifier: {
      default: "",
      type: String
    }
  }
};
</script>

<style scoped>
</style>
