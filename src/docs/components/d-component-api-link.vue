<template>
  <d-component-api-link-target :component-name="componentName">
    <template #default="target">
      <slot v-bind="target">
        <!-- do not format this – otherwise it will look bad -->
        <FdLink
          class="fdd-component-api-link fd-has-font-family-code"
          :class="classes"
          :to="target.to"
          >{{ target.componentName.displayableWithPrefix }}</FdLink
        >
      </slot>
    </template>
  </d-component-api-link-target>
</template>

<script>
import ComponentName from './../util/component-name'

export default {
  props: {
    type: {
      type: String,
      validator: value => ['plain', 'prominent'].indexOf(value) >= 0,
      default: 'plain'
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
        'fdd-component-api-link--prominent': this.type === 'prominent'
      }
    }
  }
}
</script>
<style lang="scss">
.fdd-component-api-link {
  display: inline;
  padding: 0.25rem 0.5rem;
  margin-left: 1px;
  margin-right: 1px;
  color: #1b4864;
  background-color: #daf1ff;
  border-radius: 5px;
  text-decoration: none;
  border-bottom: none;
}

.fdd-component-api-link:visited {
  display: inline;
  padding: 0.25rem 0.5rem;
  margin-left: 1px;
  margin-right: 1px;
  color: #1b4864;
  border-radius: 5px;
  text-decoration: none;
  border-bottom: none;
}

.fdd-component-api-link:hover {
  background-color: #86bada;
  color: #001c2e;
}
</style>
