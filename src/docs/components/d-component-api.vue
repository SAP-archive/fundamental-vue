<template>
  <div>
    <component :is="renderedApiComponentName" />
  </div>
</template>

<script>
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
  components: { DComponentName },
  computed: {
    renderedApiComponentName() {
      return `fdd-${this.componentName.normalized}-api`;
    },
    componentName() {
      const { slug } = this;
      if (slug == null) {
        return {};
      }
      return ComponentName.from(slug);
    }
  }
};
</script>
