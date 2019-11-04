// @ts-check
import Router from 'vue-router'
// @ts-ignore
import DComponentApi from './../components/d-component-api.vue'
import getDocumentedComponents from './../get-documented-components'

import { getExamplePages } from './../pages/pages'
import { Examples } from './../pages'

// eslint-disable-next-line no-undef
const baseUrl = process.env.BASE_URL

/**
 * @param {import('./../lib/page').Page} page
 * @return {import('vue-router').RouteConfig}
 */
function routeFromPage(page) {
  const [, path] = page.parentDirs
  return {
    path,
    component: async () => {
      return (await page.component()).default
    },
    meta: {
      id: page.key,
      layout: 'default',
      slug: page.parentDirs.join('/')
    }
  }
}

/**
 * @param {import('./../lib/page').PageCollection} pageCollection
 * @return {import('vue-router').RouteConfig}
 */
function routesFromPageCollection(pageCollection) {
  const children = pageCollection.pages.map(routeFromPage)
  const [collectionName] = pageCollection.parentDirs
  const hasChildren = children.length > 0
  const route = {
    path: collectionName,
    component: {
      render(h) {
        return h(pageCollection.component)
      }
    },
    meta: {
      layout: 'default',
      slug: collectionName
    }
  }
  if (hasChildren === true) {
    route.children = children
  }
  return route
}

const createRouter = () => {
  const exampleRoutes = getExamplePages().map(routesFromPageCollection)

  const router = new Router({
    base: baseUrl,
    mode: 'hash',
    // Scroll the main component to the top.
    scrollBehavior(to) {
      const { meta = {} } = to
      const { scrollToTop = true } = meta
      if (scrollToTop == false) {
        return
      }
      return new Promise(resolve => {
        window.requestAnimationFrame(() => {
          const main = window.document.querySelector('div[data-fd-main-content]')
          if (main != null) {
            setTimeout(() => {
              // somehow setTimeout is needed – otherwise API docs won't scroll to top
              main.scrollIntoView(/* alignToTop */ true)
            })
          }
          resolve()
        })
      })
    },
    routes: [
      {
        path: '/',
        name: 'home',
        // @ts-ignore
        component: () => import('./../static-pages/plugin.md'),
        meta: { layout: 'default' }
      },
      ...getDocumentedComponents().map(documentedComponent => documentedComponent.route),
      {
        name: 'plugin',
        path: '/guide/plugin',
        // @ts-ignore
        component: () => import('./../static-pages/plugin.md')
      },
      {
        name: 'guide-new-component',
        path: '/guide/new-component',
        // @ts-ignore
        component: () => import('./../static-pages/NEW_COMPONENT/NEW_COMPONENT.md')
      },
      {
        path: '/examples',
        component: {
          render(h) {
            return h('router-view')
          }
        },
        children: [...exampleRoutes]
      },
      ...new Examples().routes()
    ]
  })

  return {
    router,
    exampleRoutes
  }
}

export default createRouter
