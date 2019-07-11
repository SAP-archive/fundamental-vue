import Vue from "vue";
import FundamentalVue from "./../index.js";
import App from "./App.vue";
import Router from "vue-router";
import DocumentationLoader from "./DocumentationLoader";
import VueVirtualScroller from "vue-virtual-scroller";
import VueObserveVisibility from "vue-observe-visibility";
import createRouter from "./router/create";
import { registerComponents } from "./components";
import "./main.scss";
import ComponentApiRepository from "./component-api-repository";
import DefaultLayout from "./layouts/DefaultLayout.vue";
import FullscreenLayout from "./layouts/FullscreenLayout.vue";
import "prismjs";

const ComponentApiContext = require.context("./../../api/", true, /\.json$/);

// Vue.config.productionTip = true;
Vue.use(Router);
Vue.use(FundamentalVue);
Vue.use(VueVirtualScroller);
Vue.use(VueObserveVisibility);

// Install Plugins
Vue.use(DocumentationLoader);

// Register Layouts globally so that they are available by name
Vue.component("DefaultLayout", DefaultLayout);
Vue.component("FullscreenLayout", FullscreenLayout);

Vue.prototype.$withBase = relativePath =>
  `${process.env.BASE_URL}${relativePath}`;

Vue.prototype.$componentApiRepository = new ComponentApiRepository(
  ComponentApiContext.keys()
);

const router = createRouter(Vue.prototype.$componentApiRepository);

registerComponents(Vue);

const app = new Vue({
  router,
  render: h => h(App),
  mounted() {
    document.dispatchEvent(new Event("render-event"));
  }
});
app.$mount("#app");
