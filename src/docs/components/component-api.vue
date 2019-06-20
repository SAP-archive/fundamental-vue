<template>
  <component-doc class="component-api" v-bind="componentDocProps" />
</template>

<script>
import ComponentDoc from "./doc/component-doc.vue";
const context = require.context("./../../../api/", true, /\.json$/);

export default {
  components: { ComponentDoc },
  props: {
    componentKey: String,
    componentName: String
  },
  computed: {
    componentDocProps() {
      const json = this.jsonContent;
      const { name, props = [], events = [], slots = [] } = json;
      const documentedProps = props.map(prop => ({
        ...prop,
        type: prop.type || null,
        defaultValue: prop.default
      }));
      const description = json.componentDesc.default;
      return {
        name,
        description,
        documentedProps,
        documentedEvents: events,
        documentedSlots: slots
      };
    },
    jsonContent() {
      return context(this.componentKey);
    },
    mdContent() {
      return context(this.componentKey);
    }
  },

  methods: {
    keyForProp(prop) {
      return `${this.componentKey}-prop-${prop}`;
    }
  }
};
</script>

<style lang="scss">
.component-api {
  margin-bottom: 40px;
}
</style>
