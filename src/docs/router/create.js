// @ts-check
import Router from "vue-router";
// @ts-ignore
import DComponentApi from "./../components/d-component-api.vue";
// @ts-ignore
import DExampleCollection from "./../components/d-example-collection.vue";
// @ts-ignore
import DExampleFullscreen from "./../components/d-example-fullscreen.vue";

// @ts-ignore
import README_MD from "./../../../README.md";
// @ts-ignore
import NEW_COMPONENT_GUIDE_MD from "./../static-pages/NEW_COMPONENT/NEW_COMPONENT.md";

// eslint-disable-next-line no-undef
const baseUrl = process.env.BASE_URL;
// eslint-disable-next-line no-undef
const prerender = process.env.FDD_PRERENDER === "true";

const createRouter = () => {
  return new Router({
    base: baseUrl,
    mode: prerender ? "history" : "hash",
    // Scroll the main component to the top.
    scrollBehavior(to) {
      const { meta = {} } = to;
      const { scrollToTop = true } = meta;
      if (scrollToTop == false) {
        return;
      }
      return new Promise(resolve => {
        window.requestAnimationFrame(() => {
          const main = window.document.querySelector("div[data-fd-main-content]");
          if (main != null) {
            main.scrollIntoView(/* alignToTop */ true);
          }
          resolve();
        });
      });
    },
    routes: [
      {
        path: "/",
        name: "home",
        component: README_MD,
        meta: { layout: "default" }
      },
      {
        name: "api",
        path: "/api/:slug",
        meta: { layout: "default" },
        component: DComponentApi
      },
      {
        name: "guide-new-component",
        path: "/guide/new-component",
        component: NEW_COMPONENT_GUIDE_MD
      },
      {
        name: "examples",
        path: "/examples/:slug",
        meta: { layout: "default" },
        component: DExampleCollection
      },
      {
        name: "example",
        path: "/example/:collection/:example",
        meta: { layout: "fullscreen" },
        component: DExampleFullscreen
      }
    ]
  });
};

export default createRouter;
