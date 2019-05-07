import VueRouter from "vue-router";

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/pages/popover/click-outside",
      component: () => import("./pages/popover/click-outside.vue")
    }
    // {
    //   path: "/pages",
    //   children: [
    //     {
    //       path: "popover",
    //       children: [
    //         {
    //           path: "click-outside",
    //           component: () => import("./pages/popover/click-outside.vue")
    //         }
    //       ]
    //     }
    //   ]
    // }
  ]
});
