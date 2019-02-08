
import { PluginFunction, PluginObject } from 'vue/types/plugin';
import { VueConstructor } from 'vue/types/vue';
import { log } from '@/core';

export type Options = {
  log?: {
    registerComponent?: boolean;
    welcome?: boolean;
  };
} & object;

const getComponentName = (component: VueConstructor): string => {
  return component.prototype.constructor.extendOptions.name;
};

// This function turns any constructor into a Vue plugin.
// If you have a components that depends on other components to be globally
// installed pass them as the seoncond parameter.
export default (component: VueConstructor, ...dependencies: VueConstructor[]): PluginObject<any> & VueConstructor => {
  const componentName = getComponentName(component);
  const install: PluginFunction<any> = (Vue, options: Options = {}) => {
    const { log: logOptions = {} } = options;
    const {
      registerComponent = false,
    } = logOptions;

    Vue.component(componentName, component);
    if(registerComponent) {
      log(`Register component ${componentName}`);
    }
    dependencies.forEach(dependency => {
      Vue.component(getComponentName(dependency), dependency);
      if(registerComponent) {
        log(`Register component ${getComponentName(dependency)}`);
      }
    });
  };
  // @ts-ignore
  component.install = install;
  // @ts-ignore
  return component;
};
