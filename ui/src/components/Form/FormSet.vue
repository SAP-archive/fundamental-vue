<template>
  <div class="fd-form__set">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "FdFormSet"
});
</script>
