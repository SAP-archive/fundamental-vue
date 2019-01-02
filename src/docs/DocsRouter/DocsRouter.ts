import Router from 'vue-router';
import { ExampleCollection, StaticContent } from '@/docs/components';
import { enableLastRouteRestoration } from './LastRouteRestoration';
import { FullscreenDemo } from '@/docs/components';

export const DocsRouter = new Router({
  // Scroll the main component to the top.
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { path: '/start' },
    },
    {
      name: 'start',
      path: '/start',
      component: StaticContent,
      meta: { layout: 'Default' },
      props: { html: require('@/docs/static-pages/start.md').default },
    },
    {
      name: 'guide-new-component',
      path: '/guide/new-component',
      component: StaticContent,
      props: { html: require('@/../NEW_COMPONENT/NEW_COMPONENT.md').default },
    },
    {
      path: '/example/:slug',
      name: 'example',
      meta: { layout: 'Default' },
      component: ExampleCollection,
    },
    {
      path: '/demo/:id',
      name: 'example-demo',
      meta: { layout: 'Fullscreen' },
      component: FullscreenDemo,

    },
    {
      path: '/api/:slug',
      name: 'api',
      meta: { layout: 'Default' },
      component: ExampleCollection,
      props: { showApiOnly: true },
    },
  ],
});

enableLastRouteRestoration(DocsRouter, { restoreWhenReady: false });
