import VueRouter from "vue-router";

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("./Overview.vue")
    },
    {
      path: "/pages/popover-default",
      component: () => import("./pages/popover-default.vue")
    },
    {
      path: "/pages/combobox-default",
      component: () => import("./pages/combobox-default.vue")
    }
  ]
});
