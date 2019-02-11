<template>
  <FdSection v-if="isDocumented" v-bg:neutral-1 :title="title">
    <FdTabs :value="initialTab">
      <FdTabItem v-if="hasProps" label="Properties" name="props">
        <PropsReference :documentedProps="documentedProps" />
      </FdTabItem>
      <FdTabItem v-if="hasEvents" label="Events" name="events">
        <EventsReference :events="documentedEvents" />
      </FdTabItem>
      <FdTabItem v-if="hasSlots" label="Slots" name="slots">
        <SlotsReference :slots="documentedSlots" />
      </FdTabItem>
    </FdTabs>
  </FdSection>
</template>

<script lang="ts">
import Vue from "vue";
import { PropValidator } from "vue/types/options";
import {
  ComponentDocumentation,
  EventDocumentation,
  SlotDocumentation,
  PropDocumentation
} from "@/docs/api";

const makeEmptyDocumentation = (): ComponentDocumentation => ({
  componentName: "",
  mixins: [],
  events: {},
  props: {},
  slots: {}
});

export default Vue.extend({
  props: {
    componentDocumentation: {
      type: Object,
      default: makeEmptyDocumentation
    } as PropValidator<ComponentDocumentation>
  },
  computed: {
    title(): string {
      return `${this.componentDocumentation.componentName} API`;
    },
    initialTab(): string | null {
      if (this.hasProps) {
        return "props";
      }
      if (this.hasEvents) {
        return "events";
      }
      if (this.hasSlots) {
        return "slots";
      }
      return null;
    },
    documentedProps(): PropDocumentation[] {
      return Object.values(this.componentDocumentation.props || {});
    },
    documentedEvents(): EventDocumentation[] {
      return Object.values(this.componentDocumentation.events || {});
    },
    documentedSlots(): SlotDocumentation[] {
      return Object.values(this.componentDocumentation.slots || {});
    },
    hasProps(): boolean {
      return this.documentedProps.length > 0;
    },
    hasEvents(): boolean {
      return this.documentedEvents.length > 0;
    },
    hasSlots(): boolean {
      return this.documentedSlots.length > 0;
    },
    isDocumented(): boolean {
      return this.hasProps || this.hasEvents || this.hasSlots;
    }
  }
});
</script>
