import Vue from "vue";
import FundamentalVue from "fundamental-vue";

import "./main.scss";
import Router from "vue-router";
import { DocsRouter } from "./DocsRouter";
import { registerComponents } from "./components";
import App from "./App.vue";
import DocumentationLoader from "./DocumentationLoader";

Vue.config.productionTip = false;
Vue.use(FundamentalVue);

// Register Layouts globally so that they are available by name
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import FullscreenLayout from "@/layouts/FullscreenLayout.vue";

// Install Plugins
Vue.use(Router);
Vue.use(DocumentationLoader);

Vue.component("DefaultLayout", DefaultLayout);
Vue.component("FullscreenLayout", FullscreenLayout);

registerComponents(Vue);

const vm = new Vue({
  components: { App },
  router: DocsRouter,
  render: h => h(App)
});
vm.$mount("#app");
