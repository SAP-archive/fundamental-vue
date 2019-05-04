<template>
  <component :is="layout" />
</template>
<script>
import DefaultLayout from "./layouts/DefaultLayout.vue";
import FullscreenLayout from "./layouts/FullscreenLayout.vue";

export default {
  name: "Demo",
  data() {
    return {
      layout_: this.$route.meta.layout || "DefaultLayout"
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      const { meta } = to;
      const { layout } = meta;
      vm.layout_ = layout;
    });
  },
  computed: {
    layout() {
      const layout = this.layout_ || "DefaultLayout";
      if (layout === "FullscreenLayout") {
        return FullscreenLayout;
      }
      return DefaultLayout;
    }
  }
};
</script>
