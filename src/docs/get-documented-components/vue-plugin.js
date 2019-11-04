// @ts-check
import ComponentName from './../util/component-name'

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
  /**
   * @param {string} name
   * @returns {DocumentedComponent}
   */
  vue.prototype.$fddDocumentedComponentNamed = function(name) {
    const componentName = ComponentName.from(name)
    return documentedComponents.find(
      documentedComponent =>
        documentedComponent.componentName.normalized === componentName.normalized
    )
  }
  vue.prototype.$documentedComponents = documentedComponents
}

export default { install }
