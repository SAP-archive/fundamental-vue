import Vue from "vue";
import FundamentalVue from "./../index.js";
import App from "./App.vue";
import Router from "vue-router";
import DocumentationLoader from "./DocumentationLoader";
import VueVirtualScroller from "vue-virtual-scroller";
import VueObserveVisibility from "vue-observe-visibility";
import { DocsRouter } from "./DocsRouter";
import { registerComponents } from "./components";
import "./main.scss";

Vue.config.productionTip = false;
Vue.use(Router);
Vue.use(FundamentalVue);
Vue.use(VueVirtualScroller);
Vue.use(VueObserveVisibility);

// Register Layouts globally so that they are available by name
import DefaultLayout from "./layouts/DefaultLayout.vue";
import FullscreenLayout from "./layouts/FullscreenLayout.vue";

// Install Plugins
Vue.use(DocumentationLoader);

Vue.component("DefaultLayout", DefaultLayout);
Vue.component("FullscreenLayout", FullscreenLayout);
Vue.prototype.$withBase = relativePath =>
  `${process.env.BASE_URL}${relativePath}`;

registerComponents(Vue);

const vm = new Vue({
  components: { App },
  router: DocsRouter,
  render: h => h(App)
});
vm.$mount("#app");
