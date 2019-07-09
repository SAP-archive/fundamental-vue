<template>
  <component-doc class="component-api" v-bind="componentDocProps" />
</template>

<script>
import ComponentDoc from "./doc/component-doc.vue";
export default {
  components: { ComponentDoc },
  props: {
    componentKey: String,
    vueseParserResult: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    componentDocProps() {
      const json = this.vueseParserResult || {};
      const {
        name,
        componentDesc = {},
        props = [],
        events = [],
        slots = []
      } = json;
      const documentedProps = props.map(prop => ({
        ...prop,
        type: prop.type || null,
        defaultValue: prop.default
      }));
      const description = componentDesc.default;
      return {
        name,
        description,
        documentedProps,
        documentedEvents: events,
        documentedSlots: slots
      };
    },
    jsonContent() {
      if (this.componentKey == null) {
        return;
      }
      return context(this.componentKey);
    },
    mdContent() {
      if (this.componentKey == null) {
        return;
      }
      return context(this.componentKey);
    }
  }
};
</script>

<style lang="scss">
.component-api {
  margin-bottom: 40px;
}
</style>
