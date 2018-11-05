import { VueConstructor } from 'vue';
import { DocsExample } from './DocsExample';
import { DemoBlock } from './DemoBlock';
import { CodeView } from './CodeView';
import { ComponentCollection } from './ComponentCollection';
import DynamicComponent from './DynamicComponent.vue';
import * as ComponentApi from './ComponentApi';

export * from './DocsExample';
export * from './DemoBlock';
export * from './CodeView';
export * from './ComponentApi';
export * from './DynamicComponent.vue';
export * from './ComponentCollection';

export const registerComponents = (vue: VueConstructor) => {
  vue.component(DynamicComponent.name, DynamicComponent);
  console.info('Register Docs Component: %s', DynamicComponent.name);
  const componentAPIComponents = Object.values(ComponentApi);
  const all = [ComponentCollection, DocsExample, DemoBlock, CodeView, ...componentAPIComponents];
  all.forEach(component => {
    // @ts-ignore
    const name = component.options.name;
    console.info('Register Docs Component: %s', name);
    vue.component(name, component);
  });
};
