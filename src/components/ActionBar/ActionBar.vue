<template>
  <div class="fd-action-bar">
    <div v-if="hasBack" class="fd-action-bar__back">
      <!-- Custom back-button. By default nothing is rednered. -->
      <slot name="back" />
    </div>
    <div class="fd-action-bar__header">
      <h1 class="fd-action-bar__title">
        <!-- Custom title. You can either provide a custom title-slot or set the title-prop which is used if you don't provide a title-slot. -->
        <slot name="title">
          {{ title }}
        </slot>
      </h1>
      <p v-if="hasDescription" class="fd-action-bar__description">
        <!-- Custom description. You either can provide a custom description-slot or set the description-prop which is used if you don't provide a description-slot. -->
        <slot name="description">
          {{ description }}
        </slot>
      </p>
    </div>
    <div v-if="hasActions" class="fd-action-bar__actions">
      <!-- Custom actions. You should use this slot to add fd-button's. -->
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "FdActionBar",
  props: {
    title: { type: String, required: false },
    description: { type: String, default: null }
  },
  computed: {
    hasDescription() {
      return this.$slots.description != null || this.description != null;
    },
    hasActions() {
      return this.$slots.default != null;
    },
    hasBack() {
      return this.$slots.back != null;
    }
  }
};
</script>
