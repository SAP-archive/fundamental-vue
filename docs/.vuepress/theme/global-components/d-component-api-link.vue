<template>
  <router-link :to="to"
    ><slot>{{ humanizedComponentName }}</slot></router-link
  >
</template>

<script>
export default {
  props: {
    // kebab-cased component name with prefix
    componentName: {
      type: String,
      required: true,
      validator: componentName => componentName.startsWith("fd-")
    }
  },
  computed: {
    humanizedComponentName() {
      return this.componentName.substring(3);
    },
    to() {
      return {
        path: `/api/${this.componentName.substring(3)}`
      };
    }
  }
};
</script>
