<template>
  <div
    class="fd-tile"
    :class="classes"
    :role="role"
    :aria-disabled="disabled"
    v-fd-background-color="backgroundColor"
  >
    <div v-if="$slots.media" class="fd-tile__media">
      <slot name="media" />
    </div>
    <div class="fd-tile__content">
      <h2 v-if="title != null" class="fd-tile__title">{{ title }}</h2>
      <p v-if="description != null">{{ description }}</p>
    </div>
    <div v-if="$slots.actions" class="fd-tile__actions">
      <slot name="actions" />
    </div>
  </div>
</template>

<script>
import backgroundColor from "./../../directives/background-color";

export default {
  name: "FdTile",
  directives: { "fd-background-color": backgroundColor },
  props: {
    title: { type: String, default: null },
    description: { type: String, default: null },
    rowSpan: { type: Number, default: null },
    colSpan: { type: Number, default: null },
    backgroundColor: { type: String, default: null },
    isButton: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
  },
  computed: {
    role() {
      return this.isButton ? "button" : null;
    },
    classes() {
      return [
        this.rowSpan != null ? `fd-has-grid-row-span-${this.rowSpan}` : "",
        this.colSpan != null ? `fd-has-grid-column-span-${this.colSpan}` : ""
      ];
    }
  }
};
</script>
