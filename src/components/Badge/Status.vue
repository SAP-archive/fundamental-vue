<template>
    <span :class="[ {'fd-status-label' : true}, type ? 'fd-status-label--' + type : '', icon ? 'sap-icon--' + icon : '']">
        <slot></slot>
    </span>
</template>



<script>
export default {
  name: "Status",
  props: {
    type: {
      default: "",
      type: String
    },
    icon: {
      default: "",
      type: String
    }
  }
};
</script>

<style scoped>
</style>
