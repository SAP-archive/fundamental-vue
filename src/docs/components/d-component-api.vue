<template>
  <div>
    <d-component-name :name="componentName.displayable" />
    <d-markdown v-if="description.length > 0" :content="formattedDescription" />
    <div class="component-doc__aspect" v-if="documentedProps.length > 0">
      <div class="component-doc__aspect-name">Props</div>
      <prop-doc
        v-fd-margin:small.bottom
        v-for="prop in documentedProps"
        :key="keyForProp(prop)"
        v-bind="prop"
      />
    </div>

    <div class="component-doc__aspect" v-if="documentedEvents.length > 0">
      <div class="component-doc__aspect-name">Events</div>
      <event-doc
        v-fd-margin:small.bottom
        v-for="event in documentedEvents"
        :key="keyForEvent(event)"
        v-bind="event"
      />
    </div>

    <div class="component-doc__aspect" v-if="documentedSlots.length > 0">
      <div class="component-doc__aspect-name">Slots</div>
      <slot-doc v-for="slot in documentedSlots" :key="keyForSlot(slot)" v-bind="slot" />
    </div>
  </div>
</template>

<script>
import EventDoc from "./doc/event-doc.vue";
import PropDoc from "./doc/prop-doc.vue";
import SlotDoc from "./doc/slot-doc.vue";
import DComponentName from "./doc/component-name.vue";
import ComponentName from "./../util/component-name";

export default {
  watch: {
    $route: {
      immediate: true,
      handler(newRoute) {
        const { slug } = newRoute.params;
        this.slug = slug;
      }
    }
  },
  data() {
    return {
      slug: null
    };
  },
  components: { DComponentName, EventDoc, PropDoc, SlotDoc },
  computed: {
    componentName() {
      const { slug } = this;
      if (slug == null) {
        return {};
      }
      return ComponentName.from(slug);
    },
    parserResult() {
      const { slug } = this;
      if (slug == null) {
        return {};
      }
      const documentedComponent = this.$fddDocumentedComponentNamed(slug);
      if (documentedComponent == null) {
        return {};
      }
      return documentedComponent.api;
    },
    description() {
      const { componentDesc = {} } = this.parserResult;
      return componentDesc.default;
    },
    documentedProps() {
      const { props = [] } = this.parserResult;
      const documentedProps = props.map(prop => ({
        ...prop,
        type: prop.type || null,
        defaultValue: prop.default
      }));
      return documentedProps;
    },
    documentedSlots() {
      const { slots = [] } = this.parserResult;
      return slots;
    },
    documentedEvents() {
      const { events = [] } = this.parserResult;
      return events;
    },
    formattedDescription() {
      return this.description.join("\n");
    }
  },
  methods: {
    keyForProp(prop) {
      return `documented-component-${this.name}-prop-${prop.name}`;
    },
    keyForEvent(event) {
      return `documented-component-${this.name}-event-${event.name}`;
    },
    keyForSlot(slot) {
      return `documented-component-${this.name}-slot-${slot.name}`;
    }
  }
};
</script>

<style lang="scss">
.component-doc {
  font-size: 16px;
  line-height: 28px;
  &__name {
    color: #717171;
  }
  &__aspect {
    margin-bottom: 30px;
  }
  &__aspect-name {
    margin-bottom: 18px;
    font-size: 20px;
    font-weight: bolder;
  }
}
</style>
