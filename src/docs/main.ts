import Vue from "vue";
import "./main.scss";
Vue.config.productionTip = false;
import FundamentalVue from "./../";
import Router from "vue-router";
import { DocsRouter } from "./DocsRouter";
import { registerComponents } from "./components";
import App from "./App.vue";
import DocumentationLoader from "./DocumentationLoader";

// Register Layouts globally so that they are available by name
import DefaultLayout from "@/docs/layouts/DefaultLayout.vue";
import FullscreenLayout from "@/docs/layouts/FullscreenLayout.vue";

// Install Plugins
Vue.use(Router);
Vue.use(FundamentalVue);
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
