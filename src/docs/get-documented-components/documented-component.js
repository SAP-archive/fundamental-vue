// @ts-check

/**
 * @typedef {object} Options
 * @prop {string} key looks like './BreadcrumbItem/BreadcrumbItem.vue'
 * @prop {import("@vuese/parser").ParserResult} api
 * @prop {import("./../util/component-name").default} componentName
 * @prop {any} asyncComponent
 */
export default class DocumentedComponent {
  /** @param {Options} options */
  constructor({ key, componentName, api, asyncComponent }) {
    this.key = key
    this.componentName = componentName
    this.api = api
    this.asyncComponent = asyncComponent
  }

  /** @returns {import("vue-router").RouteConfig} */
  get route() {
    return {
      path: `/api/${this.componentName.slugified}`,
      component: this.asyncComponent
    }
  }
}
