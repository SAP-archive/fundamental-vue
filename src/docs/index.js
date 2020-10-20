// @ts-check
import Vue from 'vue'
import FundamentalVue from './..'
import 'fundamental-styles/dist/fundamental-styles.css'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import './_node/markdown-plugins/highlight/prism-theme-minipress.stylus'
import './styles/_markdown.scss'
import './../styles.scss'
import Layouts from './layouts'

// @ts-ignore
import App from './App.vue'
import Router from 'vue-router'
import VueVirtualScroller from 'vue-virtual-scroller'
import VueObserveVisibility from 'vue-observe-visibility'
import createRouter from './router/create'
import DocumentationComponents from './components'
import VueClipboard from 'vue-clipboard2'
import Examples from './pages'
import getDocumentedComponents from './get-documented-components'
import DocumentedComponentsPlugin from './get-documented-components/vue-plugin'

const documentedComponents = getDocumentedComponents()

/** @type {import("vue").VueConstructor} */
const _Vue = Vue

// eslint-disable-next-line no-undef
_Vue.prototype.$withBase = relativePath => `${process.env.BASE_URL}${relativePath}`
_Vue.use(VueClipboard)
_Vue.use(DocumentedComponentsPlugin, { documentedComponents })
_Vue.config.productionTip = true
_Vue.use(Examples)
_Vue.use(Router)
const FundamentalVueOptions = {
  register(type, { name, component }) {}
}
_Vue.use(FundamentalVue, FundamentalVueOptions)
_Vue.use(VueVirtualScroller)
_Vue.use(VueObserveVisibility)
_Vue.use(DocumentationComponents)
_Vue.use(Layouts)
const { router, exampleRoutes } = createRouter()

new Vue({
  router,
  // @ts-ignore
  fdExampleRoutes: exampleRoutes,
  el: '#app',
  render: h => h(App)
})
