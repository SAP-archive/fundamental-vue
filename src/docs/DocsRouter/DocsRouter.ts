import Router from 'vue-router';
import { ComponentCollection } from '@/docs/components';
import { StartPage } from '@/docs/static-pages/Start';
import { enableLastRouteRestoration } from './LastRouteRestoration';

export const DocsRouter = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { path: '/start' },
    },
    {
      path: '/start',
      component: StartPage,
    },
    {
      path: '/example/:slug',
      name: 'example',
      component: ComponentCollection,
    },
    {
      path: '/api/:slug',
      name: 'api',
      component: ComponentCollection,
      props: { showApiOnly: true },
    },
  ],
});

enableLastRouteRestoration(DocsRouter, { restoreWhenReady: true });
