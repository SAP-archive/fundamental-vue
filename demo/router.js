import VueRouter from "vue-router";
import Overview from "./pages/Overview.vue";

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Overview,
      meta: { layout: "FullscreenLayout " }
    },
    {
      meta: { layout: "FullscreenLayout " },
      path: "/pages/popover/click-outside",
      component: () => import("./pages/popover/click-outside.vue")
    },
    {
      meta: { layout: "FullscreenLayout " },
      path: "/pages/search-input/completions",
      component: () => import("./pages/search-input/completions.vue")
    },
    {
      meta: { layout: "FullscreenLayout " },
      path: "/pages/combobox/default-combobox",
      component: () => import("./pages/combobox/default-combobox.vue")
    }
  ]
});
