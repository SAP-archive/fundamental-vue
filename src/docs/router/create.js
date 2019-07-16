// @ts-check
import Router from "vue-router";
import {
  ExampleCollection,
  StaticContent,
  FullscreenDemo
} from "./../components";
import ComponentApiPage from "./../_pages/component-api-page.vue";

const createRouter = componentApiRepository => {
  const keys = componentApiRepository.keys;
  const componentApiRoutes = keys
    .map(key => componentApiRepository.routeForKey(key))
    .map(route => ({
      ...route,
      meta: {
        // This disables to scroll to top feature.
        // Scrolling in the api documentation is handled there.
        scrollToTop: false
      },
      // @ts-ignore
      component: () => import("./../components/d-component-api.vue")
    }));
  return new Router({
    mode: "hash",
    // Scroll the main component to the top.
    scrollBehavior(to) {
      const { meta = {} } = to;
      const { scrollToTop = true } = meta;
      if (scrollToTop == false) {
        return;
      }
      return new Promise(resolve => {
        window.requestAnimationFrame(() => {
          const main = window.document.querySelector(
            "div[data-fd-main-content]"
          );
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
        component: StaticContent,
        meta: { layout: "Default" },
        props: { html: require("./../static-pages/start.md") }
      },
      {
        path: "/api",
        name: "api",
        component: ComponentApiPage,
        meta: {
          // This disables to scroll to top feature.
          // Scrolling in the api documentation is handled there.
          scrollToTop: false
        },
        children: componentApiRoutes
      },
      {
        name: "guide-new-component",
        path: "/guide/new-component",
        component: StaticContent,
        props: {
          html: require("./../static-pages/NEW_COMPONENT/NEW_COMPONENT.md")
        }
      },
      {
        path: "/example/:slug",
        name: "example",
        meta: { layout: "Default" },
        component: ExampleCollection
      },
      {
        path: "/demo/:id",
        name: "example-demo",
        meta: { layout: "Fullscreen" },
        component: FullscreenDemo
      }
    ]
  });
};

export default createRouter;
