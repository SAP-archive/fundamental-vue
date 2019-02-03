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
        :componentDocumentation="documentedComponent"
        v-for="documentedComponent in documentedComponents" :key="keyForComponentDocumentation(documentedComponent)"
      />
        <!-- :componentDocumentation="documentedComponent.api" -->
        <!-- :component="documentedComponent.component" -->
    </div>
  </div>
</template>

<script lang="ts">
// import { all } from '@/components';
// import { FrameworkDocumentation, ComponentDocumentation } from '@/api';
// import frameworkDocumentation from './../../baseline.json'    //docs/api/';
// import { frameworkDocumentation } from '@/docs/api';
// baseline.com
// frameworkDocumentation.com
import { ComponentDocumentation } from '@/api/Model/JSON/ComponentDocumentation';
import { VueConstructor } from 'vue/types/vue';
import { Route } from 'vue-router';
import { Example } from '@/docs/pages';
import Vue from 'vue'
// import { collectionFromSlug, pages, PageType } from '@/docs/pages';
// import frameworkDocumentation from '@/docs/api/baseline.json';

// // type DocumentedComponent = { documentation: ComponentDocumentation; component: VueConstructor<any>; };
// type VMFn<T> = (vm: T) => void;
// type NextFn<T> = (fn?: VMFn<T>) => void;

// const frameworkDocumentation = new FrameworkDocumentation();
// for (const component of Object.values(all)) {
//     if ((typeof component !== 'object' && typeof component !== 'function') || !Reflect.has(component, 'options')) {
//         continue;
//     }
//     const options = Reflect.get(component, 'options');
//     if (typeof options === 'object') {
//         if ('$componentDocumentation' in options) {
//             const api = Reflect.get(options, '$componentDocumentation');
//             if (api instanceof ComponentDocumentation) {
//               frameworkDocumentation.add(api);
//             }
//         }
//     }
// }

// const componentName = (component: any) => {
//   if(typeof component === 'object') {
//     if('options' in component) {
//       const { options } = component;
//       let name: string | undefined;
//       if('componentName' in options) {
//         name = options.componentName;
//       }
//       if(name == null && 'name' in options) {
//         name = options.name || component.name;
//       }
//       return name;
//     }
//   } else {
//     return component.prototype.constructor.extendOptions.name
//   }
// };

// export { frameworkDocumentation };
export default Vue.extend({
  props: {
    title: String,
    showApiOnly: Boolean,
  },
  data() {
    return {
      relatedComponents: [] as Array<VueConstructor<any>>,
      // examples: [] as Example[],
    };
  },
  methods: {
    keyForExample(example: Example): string {
      return `example-${example.code}-${example.id}`;
    },
    keyForComponentDocumentation(documentation: ComponentDocumentation): string {
      return `api-${documentation.componentName}`;
    },
    resetUI() {
      // this
      // this.examples = [];
      this.relatedComponents = [];
    }
  },
  // beforeRouteEnter(to: Route, _: Route, next: NextFn<any>): void {
  //   const { slug } = to.params;
  //   const exampleCollection = exampleCollections.exampleCollection({ slug });
  //   if (exampleCollection == null) {
  //     next(vm => vm.resetUI());
  //     return;
  //   }
  //   const examples = exampleCollection.examples();
  //   next(vm => {
  //     vm.examples = examples;
  //     vm.relatedComponents = exampleCollection.relatedComponents;
  //     vm.$forceUpdate();
  //   });
  // },
  // beforeRouteUpdate(to: Route, _: Route, next: NextFn<any>) {
  //   const { slug } = to.params;

  //   // Reset the UI. Future work: Implement loading state.
  //   this.resetUI();
  //   const exampleCollection = exampleCollections.exampleCollection({ slug });
  //   if (exampleCollection == null) {
  //     this.resetUI();
  //     this.$forceUpdate();
  //     next();
  //     return;
  //   }
  //   const examples = exampleCollection.examples();
  //   this.examples = examples;
  //   this.relatedComponents = exampleCollection.relatedComponents;
  //   this.$forceUpdate();
  //   next();
  // },
  computed: {
    // currentPage() {

    // },
    examples(): Example[] {
      const { slug } = this.route.params;
      return this.$docLoader.examplesForPageWithSlug(slug);

      // this.$docLoader.examplesForPage(this.)
      // const sss = collectionFromSlug(slug);
      // return sss.examples();
      // return sss.examples();
      // const withSlug = (pageSlug: string) => (page: PageType) => page.slug === pageSlug;
      // const page = pages.find(withSlug(slug));
      // if(page == null) {
      //   return [];
      // }
      // const title = page.title;

      // const examples = exampleComponents(title);

      // console.log(slug, examples);
      // debugger;
      // return examples;
    },
    route(): Route {
      return this.$route;
    },
    documentedComponents(): ComponentDocumentation[] {
      const { slug } = this.route.params;
      const documentation = this.$docLoader.relatedComponentDocumentationForPageWithSlug(slug);
      return documentation;
      // const sss = collectionFromSlug(slug);
      // // return

      // const documentedRelatedComponents = this.relatedComponents.filter(component => {
      //   const name = componentName(component);
      //   if(name == null) { return false; }
      //   return frameworkDocumentation.components[name] != null;
      // });
      // const result = documentedRelatedComponents.map(component => {
      //   const name = componentName(component) || '';
      //   const api = frameworkDocumentation.components[name];
      //   return {
      //     component,
      //     api,
      //   };
      // });
      // return result;
    }
  },
  watch: {
    // $route: { immediate: true, handler(newRoute: Route) {
    //   const { slug } = newRoute.params;
    //   // Reset the UI. Future work: Implement loading state.
    //   this.resetUI();
    //   const exampleCollection = exampleCollections.exampleCollection({ slug });
    //   if (exampleCollection === undefined) {
    //     this.resetUI();
    //     this.$forceUpdate();
    //     return;
    //   }

    //   this.examples = exampleCollection.examples();
    //   this.relatedComponents = exampleCollection.relatedComponents;
    //   this.$forceUpdate();
    // }},
  },
});
</script>
