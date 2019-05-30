<template>
  <div>
    <component-example
      v-for="example in examples"
      :key="keyForExample(example)"
      :exampleId="example.id"
      :tip="example.tip"
      :docs="example.docs"
      :component="example.component"
      :sourcecode="example.code"
      :title="example.title"
      :condensed="example.condensed"
      :fullscreenOnly="example.fullscreenOnly"
    />
    <div v-if="documentedComponents.length > 0">
      <component-reference
        v-fd-margin:large.bottom
        :componentDocumentation="documentedComponent"
        v-for="documentedComponent in documentedComponents"
        :key="keyForComponentDocumentation(documentedComponent)"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      relatedComponents: []
    };
  },
  methods: {
    keyForExample(example) {
      return `example-${example.code}-${example.id}`;
    },
    keyForComponentDocumentation(documentation) {
      return `api-${documentation.componentName}`;
    }
  },

  computed: {
    examples() {
      const { slug } = this.route.params;
      return this.$docLoader.examplesForPageWithSlug(slug);
    },
    route() {
      return this.$route;
    },
    documentedComponents() {
      const { slug } = this.route.params;
      const documentation = this.$docLoader.relatedComponentDocumentationForPageWithSlug(
        slug
      );
      return documentation;
    }
  }
};
</script>
