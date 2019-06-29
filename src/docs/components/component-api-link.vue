<template>
  <router-link :to="to"
    ><slot>{{ componentName }}</slot></router-link
  >
</template>

<script>
export default {
  props: {
    // kebab-cased component name with prefix
    componentName: {
      type: String
    }
  },
  computed: {
    to() {
      const { componentName } = this;
      const componentKey = `./${componentName}.json`;
      return {
        props: {
          componentKey
        },
        name: `component-api.${componentName}`,
        path: componentName
      };
    }
  }
};
</script>
