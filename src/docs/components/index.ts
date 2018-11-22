import { VueConstructor } from 'vue';
import { ComponentExample } from './ComponentExample';
import { CodeView } from './CodeView';
import { ExampleCollection } from './ExampleCollection';
import DynamicComponent from './DynamicComponent.vue';
import * as ComponentReference from './ComponentReference';
import { StaticContent } from './StaticContent';

export * from './DynamicComponent.vue';
export { ComponentExample } from './ComponentExample';
export { CodeView } from './CodeView';
export { ComponentReference } from './ComponentReference';
export { ExampleCollection } from './ExampleCollection';
export { StaticContent } from './StaticContent';

export const registerComponents = (vue: VueConstructor) => {
  vue.component(DynamicComponent.name, DynamicComponent);
  console.info('Register Docs Component: %s', DynamicComponent.name);
  const componentReferenceComponents = Object.values(ComponentReference);
  const all = [StaticContent, ExampleCollection, ComponentExample, CodeView, ...componentReferenceComponents];
  all.forEach(component => {
    // @ts-ignore
    const name = component.options.name;
    console.info('Register Docs Component: %s', name);
    vue.component(name, component);
  });
};
