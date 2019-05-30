import Router from "vue-router";
import {
  ExampleCollection,
  StaticContent,
  FullscreenDemo,
  ApiReference
} from "./../components";

export const DocsRouter = new Router({
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
      redirect: { path: "/start" }
    },
    {
      path: "/api",
      name: "api",
      component: ApiReference,
      meta: {
        // This disables to scroll to top feature.
        // Scrolling in the api documentation is handled there.
        scrollToTop: false
      }
    },
    {
      name: "start",
      path: "/start",
      component: StaticContent,
      meta: { layout: "Default" },
      props: { html: require("./../static-pages/start.md") }
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
