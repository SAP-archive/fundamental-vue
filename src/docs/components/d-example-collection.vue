<template>
  <div v-fd-margin:large.bottom>
    <component :is="String(`md-${slug}`)" />
  </div>
</template>

<script>
import Vue from 'vue'
import ComponentName from './../util/component-name'
import DRelatedComponentsSection from './d-related-components-section.vue'
import ProvideContent from './d-md-provide-content'

export default {
  mixins: [
    ProvideContent({
      after: DRelatedComponentsSection
    })
  ],
  data() {
    return {
      providedFrontmatter: Vue.observable({ value: {} }),
      providedRelatedComponents: Vue.observable({ value: [] })
    }
  },
  watch: {
    relatedComponents: {
      deep: true,
      immediate: true,
      handler(relatedComponents) {
        this.providedRelatedComponents.value = relatedComponents
      }
    }
  },
  computed: {
    frontmatter() {
      return this.providedFrontmatter.value
    },
    relatedComponents() {
      const names = (this.frontmatter || {}).fdRelatedComponents || []
      return names.map(name => new ComponentName.from(name))
    },
    slug() {
      return this.route.params.slug
    },
    route() {
      return this.$route
    }
  }
}
</script>
