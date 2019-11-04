import VueRouter from 'vue-router'
import { importPage, pageKeys, pageNameFromKey } from './pages'

const pageNames = pageKeys.map(pageNameFromKey)

const routePages = pageKeys.map(pageKey => {
  const { component, name } = importPage(pageKey)
  const path = `/pages/${name}`
  return {
    component,
    path
  }
})

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      component: () => import('./Overview.vue'),
      path: '/',
      props: {
        pageNames: [...pageNames]
      }
    },
    ...routePages
  ]
})
