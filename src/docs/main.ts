import './class-component-hooks';
import './main.scss';
import Vue from 'vue';
Vue.config.productionTip = false;
import FundamentalVue from '@/index';
import Router from 'vue-router';
import { DocsRouter } from './DocsRouter';
import { registerComponents } from './components';
import { App } from './App';

// Register Layouts globally so that they are available by name
import { DefaultLayout } from '@/docs/layouts/DefaultLayout';
import { FullscreenLayout } from '@/docs/layouts/FullscreenLayout';

Vue.component('DefaultLayout', DefaultLayout);
Vue.component('FullscreenLayout', FullscreenLayout);

// Install Plugins
Vue.use(FundamentalVue);
Vue.use(Router);

// Create Store + misc
registerComponents(Vue);

new Vue({
  components: { App },
  router: DocsRouter,
  render: h => h(App),
}).$mount('#app');
