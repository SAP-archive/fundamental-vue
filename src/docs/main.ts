import Vue from 'vue';
import './class-component-hooks';
import './main.scss';
Vue.config.productionTip = false;
import FundamentalVue from './../';
import Router from 'vue-router';
import { DocsRouter } from './DocsRouter';
import { registerComponents } from './components';
import App from './App.vue';
// import { allComponentCtors } from '@/docs/api';
import DocumentationLoader from './DocumentationLoader';

// import frameworkDocumentation from './api/_baseline.json';
// import { Framework } from '@/api/Model/JSON/Framework';
// const framework: Framework = json;
// const c = frameworkDocumentation.components;
// debugger;
// Register Layouts globally so that they are available by name
import DefaultLayout from '@/docs/layouts/DefaultLayout.vue';
import FullscreenLayout from '@/docs/layouts/FullscreenLayout.vue';

Vue.use(FundamentalVue);
Vue.use(DocumentationLoader);
Vue.component('DefaultLayout', DefaultLayout);
Vue.component('FullscreenLayout', FullscreenLayout);

// Install Plugins
Vue.use(Router);

registerComponents(Vue);

const vm = new Vue({
  components: { App },
  router: DocsRouter,
  render: h => h(App),
});
vm.$mount('#app');
setTimeout(() => {
  // const ccc = allComponentCtors(vm);
  // debugger;
  // const { apis } = legacyFrameworkDocumentation;
  // const components: object = {};
  // apis.forEach(api => components[api.componentName] = api );

  // const documentation = JSON.stringify({components});
  // console.log(documentation);
}, 2000);
