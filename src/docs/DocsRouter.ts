// import { routes } from '@/docs';
import Vue from 'vue';
import Router from 'vue-router';
import { ComponentCollection } from './components/ComponentCollection';
Vue.use(Router);
import { StartPage } from './static-pages/Start';

export const docsRouter = new Router({
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
  ],
});
