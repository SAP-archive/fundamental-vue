<template>
  <div v-if="isDocumented">
    <div class="title">
      <code>{{ title }}</code
      >-API
    </div>
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
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { PropValidator } from "vue/types/options";
import {
  ComponentDocumentation,
  EventDocumentation,
  SlotDocumentation,
  PropDocumentation
} from "@/api";
import { objectValues } from "@/util";

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
      return this.componentDocumentation.componentName;
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
      return objectValues(this.componentDocumentation.props || {});
    },
    documentedEvents(): EventDocumentation[] {
      return objectValues(this.componentDocumentation.events || {});
    },
    documentedSlots(): SlotDocumentation[] {
      return objectValues(this.componentDocumentation.slots || {});
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

<style lang="scss" scoped>
.title {
  font-weight: bold;
  color: rgb(60, 60, 60);
  text-align: right;
  font-size: 14px;
}
code {
  background-color: rgb(184, 213, 250);
  padding: 3px;
  border-radius: 3px;
  font-size: 14px;
}
</style>
