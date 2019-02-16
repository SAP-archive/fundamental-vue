<template>
  <div>
    <div v-if="!showApiOnly">
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
    <div
      v-if="documentedComponents.length > 0"
      v-bg:neutral-1
      style="padding-top: 15px;"
    >
      <component-reference
        :componentDocumentation="documentedComponent"
        v-for="documentedComponent in documentedComponents"
        :key="keyForComponentDocumentation(documentedComponent)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { ComponentDocumentation } from "@/api/ComponentDocumentation";
import { VueConstructor } from "vue/types/vue";
import { Route } from "vue-router";
import { Example } from "@/pages";
import Vue from "vue";
export default Vue.extend({
  props: {
    title: String,
    showApiOnly: Boolean
  },
  data() {
    return {
      relatedComponents: [] as Array<VueConstructor<any>>
    };
  },
  methods: {
    keyForExample(example: Example): string {
      return `example-${example.code}-${example.id}`;
    },
    keyForComponentDocumentation(
      documentation: ComponentDocumentation
    ): string {
      return `api-${documentation.componentName}`;
    },
    resetUI() {
      this.relatedComponents = [];
    }
  },

  computed: {
    examples(): Example[] {
      const { slug } = this.route.params;
      return this.$docLoader.examplesForPageWithSlug(slug);
    },
    route(): Route {
      return this.$route;
    },
    documentedComponents(): ComponentDocumentation[] {
      const { slug } = this.route.params;
      const documentation = this.$docLoader.relatedComponentDocumentationForPageWithSlug(
        slug
      );
      return documentation;
    }
  }
});
</script>
