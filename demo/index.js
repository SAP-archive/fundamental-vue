import Demo from "./Demo.vue";
import Vue from "vue";
import router from "./router";
import VueRouter from "vue-router";
import FundamentalVue from "./../src/index";
import "./main.scss";
import Overview from "./pages/Overview.vue";

Vue.component("Overview", Overview);
Vue.use(FundamentalVue, { log: { welcome: true, registerComponent : true }});
Vue.use(VueRouter);

const vm = new Vue({
  router,
  render: h => h(Demo)
});
vm.$mount("#app");
