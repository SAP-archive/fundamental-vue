<template>
  <fieldset class="fd-form__set">
    <slot/>
  </fieldset>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "FdFieldSet"
});
</script>

