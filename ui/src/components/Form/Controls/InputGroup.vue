<template>
  <div class="fd-input-group" :class="classes">
    <span
      v-if="hasBefore"
      class="fd-input-group__addon fd-input-group__addon--before"
    >
      <slot name="before">{{ before }}</slot>
    </span>
    <slot />
    <span v-if="hasAfter" :class="afterClasses">
      <slot name="after">{{ after }}</slot>
    </span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "FdInputGroup",
  props: {
    before: { type: String, default: null },
    after: { type: String, default: null },
    afterClass: { type: String, default: null },
    compact: { type: Boolean, default: false }
  },
  computed: {
    hasBefore(): boolean {
      return this.before != null || this.$slots.before != null;
    },
    hasAfter(): boolean {
      return this.after != null || this.$slots.after != null;
    },
    afterClasses(): string[] {
      const afterClass = this.afterClass;
      return [
        "fd-input-group__addon",
        "fd-input-group__addon--after",
        ...(afterClass != null ? [afterClass] : [])
      ];
    },
    classes(): object {
      return {
        "fd-input-group--before": this.before || this.$slots.before,
        "fd-input-group--after": this.after || this.$slots.after,
        "fd-input-group--compact": this.compact
      };
    }
  }
});
</script>
