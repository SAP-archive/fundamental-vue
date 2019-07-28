// @ts-check

/**
 * @typedef {object} Options
 * @prop {string} key looks like './BreadcrumbItem/BreadcrumbItem.vue'
 * @prop {import("@vuese/parser").ParserResult} api
 * @prop {import("./../util/component-name").default} componentName
 * @prop {any} renderedApiComponent
 */
export default class DocumentedComponent {
  /** @param {Options} options */
  constructor({ key, componentName, api, renderedApiComponent }) {
    this.key = key;
    this.componentName = componentName;
    this.api = api;
    this.renderedApiComponent = renderedApiComponent;
  }

  /** @returns {import("vue-router").RouteConfig} */
  get route() {
    return {
      path: this.componentName.slugified
    };
  }
}
