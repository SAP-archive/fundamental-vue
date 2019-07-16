<template>
  <div :class="classes">
    <!-- HEADER -->
    <div v-if="needsHeader" class="fd-panel__header">
      <div v-if="needsHead" class="fd-panel__head">
        <h1 v-if="hasTitle" class="fd-panel__title">
          <slot name="title">
            {{ title }}
          </slot>
        </h1>
        <p v-if="hasDescription" class="fd-panel__description">
          <slot name="description">
            {{ description }}
          </slot>
        </p>
      </div>
      <div v-if="hasActions" class="fd-panel__actions">
        <slot name="actions" />
      </div>
    </div>
    <div v-if="$slots.filters != null" class="fd-panel__filters">
      <slot name="filters" />
    </div>
    <div v-if="$slots.default" :class="bodyClasses"><slot /></div>
    <div v-if="$slots.footer" :class="footerClasses">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
import { paddingClasses } from "./../../directives/design-system-utilities";

const isValidColSpan = value => value >= 2 && value <= 6;

const PANEL_CLASS = "fd-panel";

export default {
  name: "FdPanel",
  props: {
    title: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    span: {
      type: Number,
      default: null,
      validator: isValidColSpan
    },
    condensed: {
      type: Boolean,
      default: false
    },
    condensedFooter: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    bodyClasses() {
      const classes = !this.condensed ? [] : paddingClasses("none");
      return [`${PANEL_CLASS}__body`, ...classes];
    },
    footerClasses() {
      const classes = !this.condensedFooter ? [] : paddingClasses("none");
      return [`${PANEL_CLASS}__footer`, ...classes];
    },
    classes() {
      const staticClasses = [PANEL_CLASS];
      const { span } = this;
      return span == null ? staticClasses : [...staticClasses, `fd-has-grid-column-span-${span}`];
    },
    hasTitle() {
      return this.$slots.title != null || this.title != null;
    },
    hasDescription() {
      return this.$slots.description != null || this.description != null;
    },
    hasActions() {
      return this.$slots.actions != null;
    },
    needsHeader() {
      return this.needsHead || this.hasActions;
    },
    needsHead() {
      return this.hasTitle || this.hasDescription;
    }
  }
};
</script>
