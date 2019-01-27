<template>
  <div>
      <div v-if="!showApiOnly">
        <component-example
          v-for="example in examples"
          :key="keyForExample(example)"
          :exampleId="example.id"
          :tip="example.tip"
          :docs="example.docs"
          :component="example.component"
          :sourcecode="example.code"
          :title="example.title"
          :condensed="example.condensed"
          :fullscreenOnly="example.fullscreenOnly"
        />
      </div>
    <div
      v-if="documentedComponents.length > 0"
      v-bg:neutral-1
      style='padding-top: 15px;'
    >
      <component-reference
        v-for="documentedComponent in documentedComponents" :key="keyForComponentDocumentation(documentedComponent)"
        :documentation="documentedComponent.api"
      />
        <!-- :component="documentedComponent.component" -->
    </div>
  </div>
</template>

<script lang="ts">
import { all } from '@/components';
import { FrameworkDocumentation, ComponentDocumentation } from '@/api';
import { VueConstructor } from 'vue/types/vue';
import { Route } from 'vue-router';
import { exampleCollections, Example } from '@/docs/pages';
import Vue from 'vue'

type DocumentedComponent = { api: ComponentDocumentation; component: VueConstructor<any>; };
type VMFn<T> = (vm: T) => void;
type NextFn<T> = (fn?: VMFn<T>) => void;

const frameworkDocumentation = new FrameworkDocumentation();
for (const component of Object.values(all)) {
    if ((typeof component !== 'object' && typeof component !== 'function') || !Reflect.has(component, 'options')) {
        continue;
    }
    const options = Reflect.get(component, 'options');
    if (typeof options === 'object') {
        if ('$componentDocumentation' in options) {
            const api = Reflect.get(options, '$componentDocumentation');
            if (api instanceof ComponentDocumentation) {
              frameworkDocumentation.add(api);
            }
        }
    }
}

const componentName = (component: any) => {
  if('options' in component) {
    const { options } = component;
    let name: string | undefined;
    if('componentName' in options) {
      name = options.componentName;
    }
    if(name == null && 'name' in options) {
      name = options.name || component.name;
    }
    return name;
  }
};

export default Vue.extend({
  props: {
    title: String,
    showApiOnly: Boolean,
  },
  data() {
    return {
      relatedComponents: [] as Array<VueConstructor<any>>,
      examples: [] as Example[],
    };
  },
  methods: {
    keyForExample(example: Example): string {
      return `example-${example.code}-${example.id}`;
    },
    keyForComponentDocumentation(documentation: DocumentedComponent): string {
      return `api-${documentation.component.name}`;
    },
    resetUI() {
      this
      this.examples = [];
      this.relatedComponents = [];
    }
  },
  beforeRouteEnter(to: Route, _: Route, next: NextFn<any>): void {
    const { slug } = to.params;
    const exampleCollection = exampleCollections.exampleCollection({ slug });
    if (exampleCollection == null) {
      next(vm => vm.resetUI());
      return;
    }
    const examples = exampleCollection.examples();
    next(vm => {
      vm.examples = examples;
      vm.relatedComponents = exampleCollection.relatedComponents;
      vm.$forceUpdate();
    });
  },
  beforeRouteUpdate(to: Route, _: Route, next: NextFn<any>) {
    const { slug } = to.params;

    // Reset the UI. Future work: Implement loading state.
    this.resetUI();
    const exampleCollection = exampleCollections.exampleCollection({ slug });
    if (exampleCollection == null) {
      this.resetUI();
      this.$forceUpdate();
      next();
      return;
    }
    const examples = exampleCollection.examples();
    this.examples = examples;
    this.relatedComponents = exampleCollection.relatedComponents;
    this.$forceUpdate();
    next();
  },
  computed: {
    documentedComponents(): DocumentedComponent[] {
      const documentedRelatedComponents = this.relatedComponents.filter(component => {
        const name = componentName(component);
        if(name == null) { return false; }
        return frameworkDocumentation.has(name);
      });
      return documentedRelatedComponents.map(component => {
        const name = componentName(component) || '';
        return {
          component,
          api: frameworkDocumentation.get(name),
        };
      });
    }
  },
  watch: {
    $route: { immediate: true, handler(newRoute: Route) {
      const { slug } = newRoute.params;
      // Reset the UI. Future work: Implement loading state.
      this.resetUI();
      const exampleCollection = exampleCollections.exampleCollection({ slug });
      if (exampleCollection === undefined) {
        this.resetUI();
        this.$forceUpdate();
        return;
      }

      this.examples = exampleCollection.examples();
      this.relatedComponents = exampleCollection.relatedComponents;
      this.$forceUpdate();
    }},
  },
});
</script>
