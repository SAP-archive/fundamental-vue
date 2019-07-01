<template>
  <component :is="exampleComponent" />
</template>

<script>
export default {
  computed: {
    route() {
      return this.$route;
    },
    routeParams() {
      return this.route.params;
    },
    example() {
      return this.routeParams.example;
    },
    collection() {
      return this.routeParams.collection;
    },
    exampleComponentName() {
      return `ex-${this.collection}--${this.example}`;
    },
    exampleComponent() {
      return this.exampleComponentName;
    }
  }
};
</script>
