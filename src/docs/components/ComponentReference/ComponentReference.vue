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

<script>
import { objectValues } from "./../../util";

const makeEmptyDocumentation = () => ({
  componentName: "",
  mixins: [],
  events: {},
  props: {},
  slots: {}
});

export default {
  props: {
    componentDocumentation: {
      type: Object,
      default: makeEmptyDocumentation
    }
  },
  computed: {
    title() {
      return this.componentDocumentation.componentName;
    },
    initialTab() {
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
    documentedProps() {
      return objectValues(this.componentDocumentation.props || {});
    },
    documentedEvents() {
      return objectValues(this.componentDocumentation.events || {});
    },
    documentedSlots() {
      return objectValues(this.componentDocumentation.slots || {});
    },
    hasProps() {
      return this.documentedProps.length > 0;
    },
    hasEvents() {
      return this.documentedEvents.length > 0;
    },
    hasSlots() {
      return this.documentedSlots.length > 0;
    },
    isDocumented() {
      return this.hasProps || this.hasEvents || this.hasSlots;
    }
  }
};
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
