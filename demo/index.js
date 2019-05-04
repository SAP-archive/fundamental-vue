import Vue from "vue";
import router from "./router";
import VueRouter from "vue-router";
import FundamentalVue from "./../src/index";
import FullscreenLayout from "./layouts/FullscreenLayout.vue";
import "./main.scss";

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
