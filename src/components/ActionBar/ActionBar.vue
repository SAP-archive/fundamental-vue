<template>
  <div class="fd-action-bar">
    <div v-if="hasBack" class="fd-action-bar__back">
      <slot name="back"/>
    </div>
    <div class="fd-action-bar__header">
      <h1 class="fd-action-bar__title">{{title}}</h1>
      <p v-if="description != null" class="fd-action-bar__description">{{description}}</p>
    </div>
    <div v-if="hasActions" class="fd-action-bar__actions">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "FdActionBar",
  props: {
    title: { type: String, required: true },
    description: { type: String, default: null }
  },
  computed: {
    hasActions(): boolean {
      return this.$slots.default != null;
    },
    hasBack(): boolean {
      return this.$slots.back != null;
    },
  },
});
</script>
