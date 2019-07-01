<template>
  <ul class="fdd-related-components">
    <li v-for="componentName in componentNames_" :key="componentName.normalized">
      <d-component-api-link :component-name="componentName">
        <template #default="{to}">
          <router-link :to="to">{{ componentName.displayable }}</router-link>
        </template>
      </d-component-api-link>
    </li>
  </ul>
</template>

<script>
import ComponentName from "./../util/component-name";

export default {
  computed: {
    componentNames_() {
      return this.componentNames.map(raw => {
        if (typeof raw === "string") {
          return ComponentName.from(raw);
        }
        return raw;
      });
    }
  },
  props: {
    componentNames: {
      type: Array,
      validator: values => {
        if (Array.isArray(values) == false) {
          return false;
        }
        for (const value of values) {
          if (value instanceof ComponentName == false && typeof value !== "string") {
            return false;
          }
        }
        return true;
      },
      default: () => [] // no related components by default
    }
  }
};
</script>

<style lang="scss">
.fdd-related-components {
  & > li {
    margin-left: 20px;
  }
}
</style>
