import DocumentedComponent from './documented-component'
import ComponentName from './../util/component-name'

// Keys will looks like this:
// ./BreadcrumbItem/BreadcrumbItem.vue
// eslint-disable-next-line no-undef
const ApiContext = require.context('!vuese-loader!!./../../components', true, /\.vue$/)

// eslint-disable-next-line no-undef
const RenderedApiContext = require.context('./../../components?fddApi', true, /\.vue$/, 'lazy')

/** @type {DocumentedComponent[]} */
export default () => {
  return ApiContext.keys()
    .map(apiKey => {
      const api = ApiContext(apiKey).default
      const rawName = api.name
      if (ComponentName.hasPrefix(rawName) == false) {
        return
      }
      const componentName = ComponentName.from(rawName)
      const asyncComponent = async () => {
        return (await RenderedApiContext(apiKey)).default
      }
      const documentedComponent = new DocumentedComponent({
        componentName,
        api,
        key: apiKey,
        asyncComponent
      })
      return documentedComponent
    })
    .filter(d => d != null)
}
