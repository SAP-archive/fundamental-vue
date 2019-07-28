// @ts-check
import ComponentName from "./../util/component-name";

/**
 * @typedef {import("./documented-component").default} DocumentedComponent
 *
 * @typedef {object} Options
 * @prop {DocumentedComponent[]} documentedComponents
 */

/**
 * @param {import("vue").VueConstructor} vue
 * @param {Options} options
 */
const install = (vue, { documentedComponents }) => {
  // Register the components that display the component apis
  documentedComponents.forEach(documentedComponent => {
    const componentName = documentedComponent.componentName.normalized;
    const name = `fdd-${componentName}-api`;
    const component = documentedComponent.renderedApiComponent;
    vue.component(name, component);
  });
  /**
   * @param {string} name
   * @returns {DocumentedComponent}
   */
  vue.prototype.$fddDocumentedComponentNamed = function(name) {
    const componentName = ComponentName.from(name);
    return documentedComponents.find(
      documentedComponent =>
        documentedComponent.componentName.normalized === componentName.normalized
    );
  };
  vue.prototype.$documentedComponents = documentedComponents;
};

export default { install };
