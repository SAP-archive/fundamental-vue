import App from "./App.vue";
import Vue from "vue";
import router from "./router";
import VueRouter from "vue-router";
import FundamentalVue from "./../src/index";
import "./main.scss";

Vue.use(FundamentalVue);
Vue.use(VueRouter);

const vm = new Vue({
  router,
  render: h => h(App)
});
vm.$mount("#app");
