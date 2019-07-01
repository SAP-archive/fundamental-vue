<template>
  <component :is="injectedComponent" v-if="injectedComponent != null" />
</template>

<script>
export default {
  props: {
    name: String
  },
  inject: {
    $_fddMdSlots: {
      default: {}
    }
  },
  computed: {
    injectedComponent() {
      if (this.name == null) {
        return null;
      }
      const component = this.injectedSlots[this.name];
      return component;
    }
  },
  data() {
    return {
      injectedSlots: {}
    };
  },
  watch: {
    $_fddMdSlots: {
      deep: true,
      immediate: true,
      handler(injectedSlots) {
        this.injectedSlots = injectedSlots;
      }
    }
  }
};
</script>
