// @ts-check
/* eslint-env node */

// This require-statement has to be high up – otherwise you will get strange errors.
const CreatePrerenderConfig = require("./vue-config/vue-spa.config");
const Path = require("path");

const baseUrl = process.env.BASE_URL;

const FDD_PRERENDER = process.env.FDD_PRERENDER;
const isInPrerendering = FDD_PRERENDER === "true";
let prerenderConfig = {};
if (isInPrerendering) {
  prerenderConfig = CreatePrerenderConfig(baseUrl);
}
const outputDir = isInPrerendering ? { outputDir: prerenderConfig.outputDir } : {};

const configureWebpack = isInPrerendering ? prerenderConfig.configureWebpack : {};

const publicPath = baseUrl;

// eslint-disable-next-line no-console
console.log("🌈  ", { FDD_PRERENDER, baseUrl, publicPath });

module.exports = {
  publicPath,
  ...outputDir,
  configureWebpack: {
    ...configureWebpack
  },
  /**
   * @param {import("webpack-chain")} config
   */
  chainWebpack: config => {
    if (isInPrerendering) {
      prerenderConfig.chainWebpack(config);
    }

    config.plugin("define").tap(definitions => {
      definitions[0]["process.env"]["FDD_PRERENDER"] = JSON.stringify(FDD_PRERENDER);
      return definitions;
    });

    config.module
      .rule("vue")
      .use("fd-component-api-loader")
      .loader("fd-component-api-loader")
      .after("vue-loader")
      .end();

    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap(() => {
        return {
          compilerOptions: {
            whitespace: "condense"
          }
        };
      });

    config.module
      .rule("md")
      .test(/\.md/)
      .use("vue-loader")
      .loader("vue-loader")
      .options({
        compilerOptions: {
          whitespace: "condense"
        }
      })
      .end()
      .use("fd-markdown-loader")
      .loader("fd-markdown-loader")
      .end();

    config.resolveLoader.modules
      .add("node_modules")
      .add(Path.resolve(__dirname, "loaders"))
      .end();
  },
  lintOnSave: false
};
