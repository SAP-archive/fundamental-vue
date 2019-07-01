/* eslint-env node */
// @ts-check
// This require-statement has to be high up – otherwise you will get strange errors.
const MarkdownItHighlight = require("./src/docs/_node/markdown/highlight");
const grayMatter = require("gray-matter");
const Path = require("path");
const CreatePrerenderConfig = require("./vue-config/vue-spa.config");

const MarkdownItPlugins = require("./src/docs/_node/markdown-plugins").all;

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
      .use("vue-markdown-loader")
      .loader("vue-markdown-loader/lib/markdown-compiler")
      .options({
        preventExtract: true,
        use: MarkdownItPlugins,
        raw: true,
        wrapper: "div",
        highlight: MarkdownItHighlight,
        preprocess(_parser, source) {
          const result = grayMatter(source);
          const relatedComponents = result.data.fdRelatedComponents || [];
          const renderRelatedComponents = () => {
            if (relatedComponents.length === 0) {
              return "";
            }
            const wrapped = relatedComponents.map(c => `'${c}'`);
            const relCompAttrs = `[${wrapped.join(", ")}]`;
            const rendered = `\n\n<d-related-components-section :component-names="${relCompAttrs}">\n</ d-related-components-section>\n\n`;
            return rendered;
          };
          let md = "";
          md += result.content;
          md += renderRelatedComponents();
          return md;
        }
      });

    config.resolveLoader.modules
      .add("node_modules")
      .add(Path.resolve(__dirname, "loaders"))
      .end();
  },
  lintOnSave: false
};
