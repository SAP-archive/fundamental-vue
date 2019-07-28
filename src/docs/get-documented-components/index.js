import DocumentedComponent from "./documented-component";
import ComponentName from "./../util/component-name";

// Keys will looks like this:
// ./BreadcrumbItem/BreadcrumbItem.vue
// eslint-disable-next-line no-undef
const ApiContext = require.context("!vuese-loader!!./../../components", true, /\.vue$/);
// eslint-disable-next-line no-undef
const RenderedApiContext = require.context("./../../components?fddApi", true, /\.vue$/);

/** @type {DocumentedComponent[]} */
export default () => {
  return ApiContext.keys()
    .map(apiKey => {
      const api = ApiContext(apiKey).default;
      const rawName = api.name;
      if (ComponentName.hasPrefix(rawName) == false) {
        return;
      }
      const componentName = ComponentName.from(rawName);
      const documentedComponent = new DocumentedComponent({
        componentName,
        api,
        key: apiKey,
        renderedApiComponent: RenderedApiContext(apiKey).default
      });
      return documentedComponent;
    })
    .filter(d => d != null);
};
