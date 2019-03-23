<template>
  <FdInput type="textarea" v-on="$listeners" v-bind="$attrs" />
</template>

<script>
import FdInput from "./Input.vue";

export default {
  name: "FdTextArea",
  components: { FdInput },
  model: {
    event: "update"
  }
};
</script>
