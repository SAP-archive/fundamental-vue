<template>
  <div :class="classes">
    <slot/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "FdContainer",
  props: {
    flex: { type: Boolean, default: false },
    fluid: { type: Boolean, default: false },
  },
  computed: {
    classes(): object {
      return {
        "fd-container": true,
        "fd-container--flex": this.flex,
        "fd-container--fluid": this.fluid
      };
    }
  },
});
</script>
