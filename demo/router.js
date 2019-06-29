import VueRouter from "vue-router";
import { pages } from "./pages";

const routePages = pages.map(page => {
  return {
    path: `/pages/${page}`,
    component: () => import(`./pages/${page}.vue`)
  };
});

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      props: {
        pageNames: [...pages]
      },
      component: () => import("./Overview.vue")
    },
    ...routePages
  ]
});
