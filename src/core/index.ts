import Vue from 'vue';
import { TsxComponent } from '@/vue-tsx';
import { Doc } from '@/api';

export const Component = Doc.component;
export const DefaultSlot = Doc.defaultSlot;
export const Slot = Doc.slot;
export const Event = Doc.event;
export const Prop = Doc.prop;
export const Mixins = Doc.mixins;
export const Model = Doc.model;

// Re-exporting for convenience
export { Vue };
export { ComponentProps } from '@/vue-tsx-types';
export { TsxComponent as Base };// from '@/vue-tsx';
