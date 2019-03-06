import { PluginFunction, PluginObject } from "vue/types/plugin";
import { VueConstructor } from "vue";
import { ComponentOptions } from "vue/types/options";
import { log } from "@/core";
import { PluginOptions, normalizedPluginOptions } from "./PluginOptions";

const getComponentName = (
  component: VueConstructor | ComponentOptions<any>
): string | undefined => {
  if (typeof component === "function") {
    const { prototype } = component;
    return prototype.constructor.extendOptions.name;
  }
  return component.name;
};

// This function turns any constructor into a Vue plugin.
// If you have a components that depends on other components to be globally
// installed pass them as the seoncond parameter.
export default (
  ...dependencies: Array<VueConstructor | ComponentOptions<any>>
): PluginObject<any> & VueConstructor => {
  const install: PluginFunction<PluginOptions> = (vue, options) => {
    const { registerComponent } = normalizedPluginOptions(options).log;
    dependencies.forEach(component => {
      const componentName = getComponentName(component);
      if (componentName == null) {
        throw Error(`
            Unable to determine component name. Component: ${component}. Did you forget to add a 'name' attribute?
                `);
      }
      if (registerComponent) {
        log(`Register component ${componentName}`);
      }
      if (typeof component === "function") {
        vue.component(componentName, component);
      } else {
        vue.component(componentName, component);
      }
    });
  };

  const [component] = dependencies;
  // @ts-ignore
  component.install = install;
  // @ts-ignore
  return component;
};
