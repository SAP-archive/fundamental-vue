<template>
  <d-component-api-link-target :component-name="componentName">
    <template #default="target">
      <slot v-bind="target">
        <!-- do not format this – otherwise it will look bad -->
        <router-link
          class="fdd-component-api-link fd-has-font-family-code"
          :class="classes"
          :to="target.to"
          >{{ target.componentName.displayableWithPrefix }}</router-link
        >
      </slot>
    </template>
  </d-component-api-link-target>
</template>

<script>
import ComponentName from "./../util/component-name";

export default {
  props: {
    type: {
      type: String,
      validator: value => ["plain", "prominent"].indexOf(value) >= 0,
      default: "plain"
    },
    componentName: {
      // If:
      // - String: raw but normalized component name
      // - Instance of ComponentName
      // We need those two forms because our component-name markdown-it-plugin is passing the component name
      // as a plain string.
      type: [String, ComponentName]
    }
  },
  computed: {
    classes() {
      return {
        "fdd-component-api-link--prominent": this.type === "prominent"
      };
    }
  }
};
</script>
<style lang="scss">
.fdd-component-api-link {
  display: inline;
  font-family: monospace;
  background-color: rgba(65, 211, 255, 0.075);
  padding: 0.25rem 0.5rem;
  font-size: 0.85em;
  border-radius: 3px;
  margin-left: 1px;
  margin-right: 1px;
}
</style>
