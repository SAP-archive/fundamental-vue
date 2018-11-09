import Vue from 'vue';
import FundamentalVue from '@/index';

import './class-component-hooks';
import * as Vuex from 'vuex';
Vue.use(Vuex);
Vue.use(FundamentalVue);

// import App from '@/views/App';
import { docsRouter } from './DocsRouter';
import { DocsPage } from './DocsPage';
import { registerComponents } from './components';

Vue.config.productionTip = false;

function localStorageAvailable() {
  const storage = window.localStorage;
  try {
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (error) {
    return error instanceof DOMException && (
      // everything except Firefox
      error.code === 22 ||
      // Firefox
      error.code === 1014 ||
      // test name field too, because code might not be present
      // everything except Firefox
      error.name === 'QuotaExceededError' ||
      // Firefox
      error.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage.length !== 0;
  }
}

docsRouter.afterEach((to, from) => {
  if (localStorageAvailable()) {
    const { fullPath } = to;
    window.localStorage.setItem('vf-last-route-fullPath', fullPath);
  }
});

if (localStorageAvailable()) {
  const lastRoute = window.localStorage.getItem('vf-last-route-fullPath');
  if (lastRoute != null) {
    docsRouter.onReady(() => {
      const loc = docsRouter.resolve(lastRoute);
      docsRouter.push(loc.location);
    });
  }
}

const store = new Vuex.Store({});

registerComponents(Vue);
new Vue({
  components: { DocsPage },
  router: docsRouter,
  store,
  render: h => h(DocsPage),
}).$mount('#app');
