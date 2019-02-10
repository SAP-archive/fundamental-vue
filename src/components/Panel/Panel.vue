<template>
  <div :class="classes">
    <!-- HEADER -->
    <div v-if="needsHeader" class='fd-panel__header'>
      <div v-if="needsHead" class='fd-panel__head'>
        <h1 v-if="title != null" class='fd-panel__title'>{{title}}</h1>
        <p v-if="description != null" class='fd-panel__description'>{{description}}</p>
      </div>
      <div v-if="hasActions" class='fd-panel__actions'><slot name="actions" /></div>
    </div>
    <div v-if="$slots.filters != null" class="fd-panel__filters"><slot name="filters" /></div>
    <div v-if="$slots.default" :class="bodyClasses"><slot /></div>
    <div v-if="$slots.footer" :class="footerClasses"><slot name="footer" /></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { paddingClasses } from '@/directives/design-system-utilities';

const isValidColSpan = (value: number) => value >= 2 && value <= 6;

const PANEL_CLASS = 'fd-panel';

export default Vue.extend({
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
    bodyClasses(): string[] {
      const classes = !this.condensed ? [] : paddingClasses('none');
      return [`${PANEL_CLASS}__body`, ...classes];
    },
    footerClasses(): string[] {
      const classes = !this.condensedFooter ? [] : paddingClasses('none');
      return [`${PANEL_CLASS}__footer`, ...classes];
    },
    classes(): object {
      const staticClasses = [PANEL_CLASS];
      const { span } = this;
      return span == null
        ? staticClasses
        : [...staticClasses, `fd-has-grid-column-span-${span}`];
    },
    hasActions(): boolean {
      return this.$slots.actions != null;
    },
    needsHeader(): boolean {
      return this.needsHead || this.hasActions;
    },
    needsHead(): boolean {
      return this.title != null || this.description != null;
    }
  },
});
</script>
