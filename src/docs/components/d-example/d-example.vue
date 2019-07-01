<template>
  <div class="fdd-example">
    <div>
      <div class="component">
        <div class="fdd-example__rendered">
          <div
            v-if="fullscreenOnly"
            class="component__default-margin"
            style="display: flex; justify-content: center;"
          >
            <router-link :to="toFullscreen">
              <fd-button
                style="margin-left: auto; margin-right: auto;"
                type="standard"
                icon="popup-window"
              >
                Show Demo
              </fd-button>
            </router-link>
          </div>

          <component v-else ref="component" :is="String(`ex-${slug}--${name}`)" />
        </div>
      </div>
      <d-example-footer
        class="fdd-example__footer"
        :example-collection="slug"
        :example-name="name"
        :code="sourcecode"
      />
    </div>
  </div>
</template>

<script>
import DExampleFooter from "./d-example-footer.vue";
import { resolveExample } from "./../../router/resolve-example";

export default {
  name: "ComponentExample",
  components: { DExampleFooter },
  props: {
    condensed: { type: Boolean, default: false },
    fullscreenOnly: { type: Boolean, default: false },
    isFullscreenExample: { type: Boolean, default: false },
    name: String
  },
  async mounted() {
    await this.$nextTick();
    const { component } = this;
    if (component == null) {
      return;
    }
    const meta = component._meta;
    if (meta == null) {
      return;
    }
    const sourcecode = meta();
    this.sourcecode = sourcecode.default;
  },
  computed: {
    toFullscreen() {
      const collection = this.slug;
      const example = this.name;
      return resolveExample({ collection, example });
    },
    component() {
      return this.$refs.component;
    },
    slug() {
      return this.route.params.slug;
    },
    route() {
      return this.$route;
    }
  },
  data() {
    return {
      sourcecode: ""
    };
  },
  methods: {
    showExampleStandalone() {
      const routeData = this.$router.resolve({
        name: "example-demo",
        params: { id: this.exampleId }
      });
      window.open(routeData.href, "__blank");
    }
  }
};
</script>

<style lang="scss">
@import "./d-example";
.fdd-example {
  border: $example-border;
  border-radius: 3px;
  margin-bottom: $example-margin-bottom;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6), 0 2px 4px 0 rgba(232, 237, 250, 0.5);
  }
  &__rendered {
    padding: $example-padding-side;
  }
}
</style>
