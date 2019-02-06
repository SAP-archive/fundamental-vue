<template>
  <section class="fd-section">
    <div class="fd-section__header" v-if="needsHeader">
      <slot name="title">
        <h1 class="fd-section__title">{{title}}</h1>
      </slot>
    </div>
    <slot/>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "FdSection",
  props: {
    title: { type: String, default: null }
  },
  computed: {
    needsHeader(): boolean {
      return this.$slots.title != null || this.title != null;
    }
  }
});
</script>

