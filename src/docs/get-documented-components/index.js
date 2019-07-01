import DocumentedComponent from "./documented-component";
import ComponentName from "./../util/component-name";

// Keys will looks like this:
// ./BreadcrumbItem/BreadcrumbItem.vue
// eslint-disable-next-line no-undef
const ComponentsContext = require.context("!!vuese-loader!./../../components", true, /\.vue$/);

const importComponentApi = key => ComponentsContext(key);

/** @type {DocumentedComponent[]} */
const documentedComponents = ComponentsContext.keys()
  .map(key => {
    const codeModule = importComponentApi(key);
    const api = codeModule.default;
    const rawName = api.name;
    if (ComponentName.hasPrefix(rawName) == false) {
      return;
    }
    const componentName = ComponentName.from(rawName);
    return new DocumentedComponent({
      key,
      componentName,
      api
    });
  })
  .filter(documentedComponent => documentedComponent != null);

export default () => {
  return documentedComponents;
};
