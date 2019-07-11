// @ts-check
const Path = require("path");
const Process = require("process");
const PrerenderSPAPlugin = require("prerender-spa-plugin");
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const getExampleCollections = require("./../src/docs/_node/get-example-collections");

const rootDir = Process.cwd();
const dist = Path.resolve(rootDir, "dist");

const vueDev = "vue/dist/vue.runtime.js";
const vueProd = "vue/dist/vue.min.js";

module.exports = {
  configureWebpack: {
    devtool: false,
    devServer: {
      historyApiFallback: true,
      noInfo: false
    },
    mode: process.env.NODE_ENV,
    entry: "./src/docs/index.js",
    output: {
      path: dist,
      publicPath: "/",
      filename: "build.js"
    },
    resolve: {
      alias: {
        vue$: process.env.NODE_ENV === "production" ? vueProd : vueDev
      }
    }
  },
  /**
   * @param {import("webpack-chain")} config
   */
  chainWebpack: config => {
    const exampleCollections = getExampleCollections();
    const examplePaths = exampleCollections.map(
      ({ slug }) => `/example/${slug}`
    );
    config.plugin("PrerenderSPAPlugin").use(PrerenderSPAPlugin, [
      {
        staticDir: dist,
        routes: ["/", "/guide/new-component", ...examplePaths],
        postProcess(renderedRoute) {
          renderedRoute.html = renderedRoute.html.replace(
            `<div id="app"`,
            `<div id="app" data-server-rendered="true"`
          );
          return renderedRoute;
        },
        renderer: new Renderer({
          maxConcurrentRoutes: 10,
          headless: true,
          renderAfterDocumentEvent: "render-event"
        })
      }
    ]);
  }
};
