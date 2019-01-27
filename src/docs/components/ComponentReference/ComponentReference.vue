<template>
  <FdSection
    v-if="isDocumented"
    v-bg:neutral-1
    :title="title"
  >
    <FdTabs :value="initialTab">
      <FdTabItem v-if="hasProps" label='Properties' name='props'>
        <PropsReference :documentedProps="documentation.props" />
      </FdTabItem>
      <FdTabItem v-if="hasEvents" label='Events' name='events'>
        <EventsReference :events="documentation.events" />
      </FdTabItem>
      <FdTabItem v-if="hasSlots" label='Slots' name='slots'>
        <SlotsReference :slots="documentation.slots" />
      </FdTabItem>
    </FdTabs>

  </FdSection>
</template>

<script lang="ts">
import Vue from 'vue'
import { ComponentDocumentation } from '@/api';
export default Vue.extend({
  props: {
    documentation: ComponentDocumentation,
  },
  computed: {
    title(): string {
      return `${this.documentation.humanName} API`;
    },
    initialTab(): string | null {
      const { props, events, slots } = this.documentation;
      if(props.length > 0) { return 'props'; }
      if(events.length > 0) { return 'events'; }
      if(slots.length > 0) { return 'slots'; }
      return null;
    },
    hasProps(): boolean { return this.documentation.props.length > 0; },
    hasEvents(): boolean { return this.documentation.events.length > 0; },
    hasSlots(): boolean { return this.documentation.slots.length > 0; },
    isDocumented(): boolean {
      const { props, events, slots } = this.documentation;
      return props.length > 0 || events.length > 0 || slots.length > 0;
    }
  },
})
</script>
