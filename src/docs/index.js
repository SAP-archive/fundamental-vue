// @ts-check
// @ts-ignore
import Vue from "vue";
import FundamentalVue from "./../index.js";
import "./main.scss";
import Layouts from "./layouts";
// @ts-ignore
import App from "./App.vue";
import Router from "vue-router";
import VueVirtualScroller from "vue-virtual-scroller";
import VueObserveVisibility from "vue-observe-visibility";
import createRouter from "./router/create";
import DocumentationComponents from "./components";
import "prismjs";
import VueClipboard from "vue-clipboard2";

import Examples from "./content/examples";
import MDPages from "./content/en_us";
import getDocumentedComponents from "./get-documented-components";
import DocumentedComponentsPlugin from "./get-documented-components/vue-plugin";
import "prismjs/components/prism-typescript.min";
import "prismjs/components/prism-javascript.min";
import "prismjs/components/prism-markup.min";
import "prismjs/components/prism-scss.min";
import "prismjs/components/prism-css.min";
import "prismjs/components/prism-bash.min";
import "./../components/masterDetails/master-details.styles.scss";

const documentedComponents = getDocumentedComponents();

/** @type {import("vue").VueConstructor} */
const _Vue = Vue;
// eslint-disable-next-line no-undef
_Vue.prototype.$withBase = relativePath => `${process.env.BASE_URL}${relativePath}`;
_Vue.use(VueClipboard);
_Vue.use(DocumentedComponentsPlugin, { documentedComponents });
_Vue.config.productionTip = true;
_Vue.use(Examples);
_Vue.use(MDPages);
_Vue.use(Router);
_Vue.use(FundamentalVue);
_Vue.use(VueVirtualScroller);
_Vue.use(VueObserveVisibility);
_Vue.use(DocumentationComponents);
_Vue.use(Layouts);
const router = createRouter();

new Vue({
  router,
  el: "#app",
  render: h => h(App),
  mounted() {
    document.dispatchEvent(new Event("render-event"));
  }
});
