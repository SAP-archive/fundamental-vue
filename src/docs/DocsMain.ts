import './class-component-hooks';
import Vue from 'vue';
import FundamentalVue from '@/index';
import Vuex from 'vuex';
import Router from 'vue-router';
import { DocsRouter } from './DocsRouter';
import { DocsPage } from './DocsPage';
import { registerComponents } from './components';

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(FundamentalVue);
Vue.use(Router);

const store = new Vuex.Store({});
registerComponents(Vue);

Vue.prototype.$$VueDevToolsEnabled = process.env.VUE_APP_FD_VUE_DEV_TOOLS === 'enabled';

new Vue({
  components: { DocsPage },
  router: DocsRouter,
  store,
  render: h => h(DocsPage),
}).$mount('#app');
