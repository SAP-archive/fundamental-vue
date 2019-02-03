<template>
  <div :class="classes" :role="role" :aria-disabled="disabled">
    <div v-if="$slots.media" class="fd-tile__media">
      <slot name="media"/>
    </div>
    <div class="fd-tile__content">
      <h2 v-if="title != null" class="fd-tile__title">{{title}}</h2>
      <p v-if="description != null">{{description}}</p>
    </div>
    <div v-if="$slots.actions" class="fd-tile__actions">
      <slot name="actions"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// Use these types in order to cast your props. Delete if not needed.
import { PropValidator } from "vue/types/options";
import { Color, backgroundColorClassName } from "@/lib";

export default Vue.extend({
  name: "FdTile",
  provide() {
    return {};
  },
  inject: {
    $$$: { default: null }
  },

  props: {
    title: { type: String, default: null },
    description: { type: String, default: null },
    rowSpan: { type: Number, default: null },
    colSpan: { type: Number, default: null },
    backgroundColor: { type: String, default: null } as PropValidator<Color>,
    isButton: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
  },
  computed: {
    role(): string | null {
      return this.isButton ? "button" : null;
    },
    classes(): object {
      const rowSpanObject = () => {
        const rowSpan = this.rowSpan;
        if (typeof rowSpan === "number") {
          return { [`fd-has-grid-row-span-${rowSpan}`]: true };
        }
        return {};
      };

      const colSpanObject = () => {
        const colSpan = this.colSpan;
        if (typeof colSpan === "number") {
          return { [`fd-has-grid-column-span-${colSpan}`]: true };
        }
        return {};
      };
      const backgroundColorClasses =
        this.backgroundColor == null
          ? {}
          : { [backgroundColorClassName(this.backgroundColor)]: true };

      return {
        ...rowSpanObject(),
        ...colSpanObject(),
        ...backgroundColorClasses,
        "fd-tile": true
      };
    }
  },
});
</script>
