<template>
  <div>
    <h1>API Reference</h1>
    <Tip>
      <p>
        This page is automatically generated using
        <a href="https://vuese.org/">vuese</a>. We have not yet annoatated our
        source code in any meaningful way. This means that the documentation
        below may be incorret, incomplete and not reliable. The API
        documentation that you find below every example is maintained manually
        and still there. We plan to improve the automatically generated
        documentation over time and, at some point, use it to replace the
        manually crafted documentation.
      </p>
    </Tip>

    <fd-container>
      <fd-col
        v-for="componentKey in componentKeys"
        :key="String('api-' + componentKey)"
      >
        <component-api :componentKey="componentKey" />
      </fd-col>
    </fd-container>
  </div>
</template>

<script>
import ComponentApi from "./component-api.vue";
const context = require.context("./../../../api/", true, /\.json$/);

export default {
  // Called when we first navigate to this component
  beforeRouteEnter(to, from, next) {
    const { query = {} } = to;
    const { component } = query;

    if (component == null) {
      next();
      return;
    }
    next(vm => {
      vm.$nextTick().then(() => {
        window.requestAnimationFrame(() => {
          const componentNameEl = document.querySelector(
            `#component-${component}`
          );
          if (componentNameEl != null) {
            setTimeout(() => {
              componentNameEl.scrollIntoView(/* alignToTop */ true);
              window.scrollBy({ top: -200 });
            }, 250);
          }
        });
      });
    });
  },
  beforeRouteUpdate(to, from, next) {
    next();
  },
  components: { ComponentApi },
  data() {
    return {
      componentKeys: [...context.keys()]
    };
  }
};
</script>

<style scoped lang="scss">
h1 {
  font-size: 42px;
  font-weight: 400;
  line-height: 60px;
  padding-bottom: 30px;
}
</style>
