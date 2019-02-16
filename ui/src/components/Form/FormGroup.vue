<template>
  <div class="fd-form__group">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "FdFormGroup",
  provide(): object {
    return {
      formGroup: this
    };
  },
  props: {
    inline: { type: Boolean, default: false }
  }
});
</script>
