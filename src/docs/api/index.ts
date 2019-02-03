import baseline from './_baseline.json';
import VueCtor from 'vue';
import { Vue } from 'vue/types/vue';
import { Component, AsyncComponent } from 'vue/types/options';
import { FrameworkDocumentation } from '@/api/Model/JSON';
// Component<any, any, any, any> | AsyncComponent<any, any, any, any>
type AllComponentType = AsyncComponent | Component;
export const frameworkDocumentation: FrameworkDocumentation = baseline;
export const allComponentCtors = (root: Vue) => {
  const { components } = frameworkDocumentation;
  const result: AllComponentType[] = [];
  for(const name of Object.keys(components)) {
    // const componentDocumentation = components[name];
    // if(componentDocumentation == null) {
    //   continue;
    // }
    // const all = root.$options.components || {};
    const component = VueCtor.component(name);
    // const component = Vueall[name];
    if(typeof component === 'function') {
      result.push(component);
    }
  }
  return result;
};
