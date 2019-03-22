<template>
  <div class="fd-action-bar">
    <div v-if="hasBack" class="fd-action-bar__back">
      <slot name="back" />
    </div>
    <div class="fd-action-bar__header">
      <h1 class="fd-action-bar__title">
        <slot name="title">
          {{ title }}
        </slot>
      </h1>
      <p v-if="hasDescription" class="fd-action-bar__description">
        <slot name="description">
          {{ description }}
        </slot>
      </p>
    </div>
    <div v-if="hasActions" class="fd-action-bar__actions">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "FdActionBar",
  props: {
    title: { type: String, required: false },
    description: { type: String, default: null }
  },
  computed: {
    hasDescription(): boolean {
      return this.$slots.description != null || this.description != null;
    },
    hasActions(): boolean {
      return this.$slots.default != null;
    },
    hasBack(): boolean {
      return this.$slots.back != null;
    }
  }
});
</script>
