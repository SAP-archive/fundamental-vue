<template>
  <component
    v-bind="attrs"
    :is="FdInput"
    v-on="$listeners"
    type="textarea"
    @update="$emit('update', $event)"
  />
</template>

<script lang="ts">
import Vue from "vue";
import FdInput from "./Input.vue";

export default Vue.extend({
  inheritAttrs: false,
  // eslint-disable-next-line vue/no-unused-components
  components: { FdInput },
  name: "FdTextArea",
  computed: {
    attrs(): object {
      const attrs = this.$attrs;
      return { ...attrs, is: "FdInput" };
    }
  },
  model: {
    event: "update"
  }
});
</script>
