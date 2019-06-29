<template>
  <div>
    <div v-fd-margin:large.bottom>
      <h2
        style="color: #555555; line-height: 45px; border-bottom: 1px solid #eeeeee;"
        v-fd-font-weight:light
        v-fd-type:5
      >
        {{ page.title }}
      </h2>
      <div v-if="relatedComponentNames.length > 0">
        <p>Related Components:</p>
        <ul>
          <li
            class="example-collection__related-component-list-item"
            v-for="name in relatedComponentNames"
            :key="name"
          >
            <component-api-link :component-name="name" />
          </li>
        </ul>
      </div>
    </div>

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
  </div>
</template>

<script>
export default {
  methods: {
    keyForExample({ id }) {
      return `example-${id}`;
    },
    keyForComponentDocumentation(documentation) {
      return `api-${documentation.componentName}`;
    }
  },

  computed: {
    relatedComponentNames() {
      return this.docLoader.pageForSlug(this.slug).relatedComponents;
    },
    slug() {
      return this.route.params.slug;
    },
    page() {
      return this.docLoader.pageForSlug(this.slug);
    },
    docLoader() {
      return this.$docLoader;
    },
    examples() {
      const { slug, docLoader } = this;
      return docLoader.examplesForPageWithSlug(slug);
    },
    route() {
      return this.$route;
    }
  }
};
</script>

<style>
.example-collection__related-components-title {
  font-weight: heavy;
}

.example-collection__related-component-list-item {
  display: inline;
}
.example-collection__related-component-list-item:not(:first-child):before {
  content: "–";
  margin-left: 5px;
  margin-right: 5px;
}
</style>
