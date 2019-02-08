
import { PluginFunction, PluginObject } from 'vue/types/plugin';
import { VueConstructor } from 'vue/types/vue';
// import { log } from '@/core';

const getComponentName = (component: VueConstructor): string => {
  return component.prototype.constructor.extendOptions.name;
};

// This function turns any constructor into a Vue plugin.
// If you have a components that depends on other components to be globally
// installed pass them as the seoncond parameter.
export default (component: VueConstructor, ...dependencies: VueConstructor[]): PluginObject<any> & VueConstructor => {
  const componentName = getComponentName(component);
  const install: PluginFunction<any> = (Vue, options) => {
    Vue.component(componentName, component);
    // log(`Register component ${componentName}`);
    dependencies.forEach(dependency => {
      Vue.component(getComponentName(dependency), dependency);
      // log(`Register component ${getComponentName(dependency)}`);
    });
  };
  // @ts-ignore
  component.install = install;
  // @ts-ignore
  return component;
};
