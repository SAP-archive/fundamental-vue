// @ts-check

const Process = require("process");
const Path = require("path");
const isE2e = process.env.FD_E2E === "true";

const { env } = Process;

const useSPA = env.FDV_SPA === "true";
const VueSPAConfig = require("./vue-config/vue-spa.config");

const configureWebpack = useSPA ? VueSPAConfig.configureWebpack : {};

const publicPath = isE2e
  ? "/"
  : process.env.NODE_ENV === "production" && process.argv[4] !== "--NETLIFY"
  ? "/fundamental-vue/"
  : "/";

module.exports = {
  publicPath,
  configureWebpack,
  chainWebpack: config => {
    // config.plugin("define").tap(args => [{ ...args[0], FDV_APP_ATTRS: "''" }]);

    if (useSPA) {
      VueSPAConfig.chainWebpack(config);
    }

    config.resolveLoader.modules
      .add("node_modules")
      .add(Path.resolve(__dirname, "loaders"))
      .end();

    config.module
      .rule("md")
      .test(/\.md$/)
      .use("html-loader")
      .loader("html-loader")
      .end();

    config.module
      .rule("md")
      .use("markdown-loader")
      .loader("markdown-loader")
      .options({
        highlight(code) {
          return require("highlight.js").highlightAuto(code).value;
        }
      })
      .end();

    config.module
      .rule("handle-title-tags")
      .resourceQuery(/blockType=title/)
      .use("block-loader")
      .loader("block-loader")
      .options({ optionName: "__title" });

    config.module
      .rule("handle-docs-tags")
      .resourceQuery(/blockType=docs/)
      .use("block-loader")
      .loader("block-loader")
      .options({ optionName: "__docs" });

    config.module
      .rule("handle-docs-tags")
      .use("markdown-loader")
      .loader("markdown-loader");

    config.module
      .rule("handle-tip-tags")
      .resourceQuery(/blockType=tip/)
      .use("block-loader")
      .loader("block-loader")
      .options({ optionName: "__tip" });

    config.module
      .rule("handle-tip-tags")
      .use("markdown-loader")
      .loader("markdown-loader");

    config.module
      .rule()
      .resourceQuery(/blockType=condensed/)
      .use("block-loader")
      .loader("block-loader")
      .options({ optionName: "__condensed" })
      .end();

    config.module
      .rule()
      .resourceQuery(/blockType=fullscreen-only/)
      .use("block-loader")
      .loader("block-loader")
      .options({ optionName: "__fullscreenOnly" })
      .end();
  },

  lintOnSave: false
};
