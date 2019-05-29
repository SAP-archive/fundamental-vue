import { log } from "./../core";
import { normalizedPluginOptions } from "./PluginOptions";

const getComponentName = component => {
  if (typeof component === "function") {
    const { prototype } = component;
    return prototype.constructor.extendOptions.name;
  }
  return component.name;
};

// This function turns any constructor into a Vue plugin.
// If you have a components that depends on other components to be globally
// installed pass them as the seoncond parameter.
export default (...dependencies) => {
  const install = (vue, options) => {
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
      vue.component(componentName, component);
    });
  };

  const [component] = dependencies;
  component.install = install;
  return component;
};
