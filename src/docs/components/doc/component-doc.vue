<template>
  <div>
    <component-name :name="name" />
    <d-markdown v-if="description.length > 0" :content="formattedDescription" />
    <div
      class="component-doc__name"
      v-fd-type:5
      v-fd-font-weight:light
      v-fd-margin:medium.bottom
    ></div>
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
      <slot-doc
        v-for="slot in documentedSlots"
        :key="keyForSlot(slot)"
        v-bind="slot"
      />
    </div>
  </div>
</template>

<script>
import EventDoc from "./event-doc.vue";
import PropDoc from "./prop-doc.vue";
import SlotDoc from "./slot-doc.vue";
import ComponentName from "./component-name.vue";

export default {
  components: { ComponentName, EventDoc, PropDoc, SlotDoc },
  computed: {
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
  },
  props: {
    name: { type: String },
    description: { type: Array, default: () => [] },
    documentedProps: { type: Array, default: () => [] },
    documentedSlots: { type: Array, default: () => [] },
    documentedEvents: { type: Array, default: () => [] }
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
