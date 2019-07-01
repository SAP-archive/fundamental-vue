/* eslint-env node */
// @ts-check

const Path = require("path");
const globby = require("globby");
const Process = require("process");
const PrerenderSPAPlugin = require("prerender-spa-plugin");
const FS = require("fs");
const parseResultFromSfc = require("./../src/tools/parse-result-from-sfc");

/**
 * @param {string} baseUrl base url – by convention the base url has to start and end with a `/`
 */
const create = baseUrl => {
  const exampleFiles = globby.sync(["src/docs/content/examples/**/*.vue"]);
  const examples = exampleFiles.map(ef => {
    const path = Path.parse(ef);
    const collection = Path.parse(Path.parse(ef).dir).name;
    return {
      collection,
      example: path.name
    };
  });

  const markdownFiles = globby.sync(["src/docs/content/en_us/**/*.md"]);
  const exampleCollections = markdownFiles.map(md => Path.parse(md).name);
  const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
  const rootDir = Process.cwd();
  const dist = Path.resolve(rootDir, "docs/dist");
  const ComponentsContext = globby.sync(["src/components/**/*.vue"]);
  const parsedComponents = ComponentsContext.map(path => FS.readFileSync(path, "utf-8"))
    .map(parseResultFromSfc)
    .map(r => r.name)
    .filter(n => n != null && n.length > 0 && n.startsWith("fd-"));

  const vueDev = "vue/dist/vue.runtime.js";
  const vueProd = "vue/dist/vue.min.js";

  const nodeEnv = Process.env.NODE_ENV || "development";
  if (nodeEnv !== "development" && nodeEnv !== "production" && nodeEnv !== "test") {
    throw Error(`Invalid value ('${nodeEnv}') for environment variable NODE_ENV.`);
  }
  const config = {
    nodeEnv: /** @type {"test" | "development" | "production"} */ (nodeEnv),
    isDevelopment: nodeEnv === "development",
    isProduction: nodeEnv === "production",
    prerender: {
      testRun: Process.env.FDD_PRERENDER_TEST_RUN === "true"
    }
  };

  /**
   * @param {string[]} routes
   * @returns {string[]}
   */
  const pickedRoutes = routes => {
    const maxIndex = routes.length - 1;
    return config.prerender.testRun ? routes.splice(0, Math.min(maxIndex, 5)) : routes;
  };

  const resolvePath = path => {
    const _path = path.startsWith("/") ? path.substring(1) : path;
    return `${baseUrl}${_path}`;
  };
  const exampleRoutes = examples.map(ex => resolvePath(`/example/${ex.collection}/${ex.example}`));
  const exampleCollectionPaths = exampleCollections.map(ec => `/examples/${ec}`);
  const apiPaths = parsedComponents.map(ec => resolvePath(`/api/${ec}`));
  const routes = [
    resolvePath("/"),
    resolvePath("/guide/new-component"),
    // Routes for individual full-screen examples.
    // For example: /example/buttons/default
    ...pickedRoutes(exampleRoutes),
    // Routes for the example collections (left side nav)
    // For example: /examples/button
    ...pickedRoutes(exampleCollectionPaths.map(resolvePath)),
    // Routes for the API documentation.
    // For example: /api/fd-button
    ...pickedRoutes(apiPaths)
  ];

  const vueConfig = {
    outputDir: Path.join(dist, baseUrl),
    configureWebpack: {
      devtool: false,
      devServer: {
        historyApiFallback: true,
        noInfo: false
      },
      mode: config.nodeEnv,
      entry: "./src/docs/index.js",
      output: {
        filename: "build.js"
      },
      resolve: {
        alias: {
          vue$: config.isProduction ? vueProd : vueDev
        }
      }
    },
    /**
     * @param {import("webpack-chain")} config
     */
    chainWebpack: config => {
      config.plugin("PrerenderSPAPlugin").use(PrerenderSPAPlugin, [
        {
          outputDir: Path.join("docs", "dist"),
          staticDir: Path.join(dist),
          indexPath: Path.join(dist, baseUrl, "index.html"),
          routes,
          postProcess(renderedRoute) {
            /** @type {{route: any, html: string}} */
            const { html, route } = renderedRoute;
            const APP_STR = `<div id="app"`;
            const htmlContainsApp = html.includes(APP_STR);
            if (htmlContainsApp == false) {
              // eslint-disable-next-line no-console
              console.warn(`Route '${route}' is something that does not contain an app-element.`);
            }
            renderedRoute.html = renderedRoute.html.replace(
              APP_STR,
              `<div id="app" data-server-rendered="true"`
            );
            return renderedRoute;
          },
          renderer: new Renderer({
            maxConcurrentRoutes: 20,
            headless: true,
            renderAfterDocumentEvent: "render-event"
          })
        }
      ]);
    }
  };
  return vueConfig;
};
module.exports = create;
