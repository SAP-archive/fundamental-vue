import Vue from "vue";
import router from "./router";
import VueRouter from "vue-router";
import FundamentalVue from "./../src";
import FullscreenLayout from "./layouts/FullscreenLayout.vue";
import VirtualScroller from "vue-virtual-scroller";
import VueObserveVisibility from "vue-observe-visibility";
import "./main.scss";

Vue.use(VueObserveVisibility);
Vue.use(VirtualScroller);
Vue.use(VueRouter);
Vue.use(FundamentalVue, {
  log: {
    welcome: true,
    registerComponent: true
  }
});

new Vue({
  router,
  el: "#app",
  render: h => h(FullscreenLayout)
});
