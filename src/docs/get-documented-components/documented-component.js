// @ts-check

/**
 * @typedef {object} Options
 * @prop {string} key looks like './BreadcrumbItem/BreadcrumbItem.vue'
 * @prop {import("@vuese/parser").ParserResult} api
 * @prop {import("./../util/component-name").default} componentName
 */
export default class DocumentedComponent {
  /** @param {Options} options */
  constructor({ key, componentName, api }) {
    this.key = key;
    this.componentName = componentName;
    this.api = api;
  }

  /** @returns {import("vue-router").RouteConfig} */
  get route() {
    return {
      path: this.componentName.slugified
    };
  }
}
