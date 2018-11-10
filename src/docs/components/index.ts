import { VueConstructor } from 'vue';
import { ComponentExample } from './ComponentExample';
import { CodeView } from './CodeView';
import { ComponentCollection } from './ComponentCollection';
import DynamicComponent from './DynamicComponent.vue';
import * as ComponentReference from './ComponentReference';

export * from './ComponentExample';
export * from './CodeView';
export * from './ComponentReference';
export * from './DynamicComponent.vue';
export * from './ComponentCollection';

export const registerComponents = (vue: VueConstructor) => {
  vue.component(DynamicComponent.name, DynamicComponent);
  console.info('Register Docs Component: %s', DynamicComponent.name);
  const componentReferenceComponents = Object.values(ComponentReference);
  const all = [ComponentCollection, ComponentExample, CodeView, ...componentReferenceComponents];
  all.forEach(component => {
    // @ts-ignore
    const name = component.options.name;
    console.info('Register Docs Component: %s', name);
    vue.component(name, component);
  });
};
