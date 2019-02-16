const Path = require("path");

const externals = {};
if (process.env.FDTESTING !== "true") {
  externals.vue = "Vue";
}
externals["fundamental-vue"] = "FundamentalVue";

module.exports = {
  devServer: {
    proxy: "http://localhost:3200"
  },
  configureWebpack: {
    externals,
    entry: "./src/main.ts",
    resolveLoader: {
      modules: ["node_modules", Path.resolve(__dirname, "loaders")]
    },
    module: {
      rules: [
        {
          test: /\.md$/,
          use: [
            {
              loader: "html-loader"
            },
            {
              loader: "markdown-loader",
              options: {
                highlight: function(code) {
                  return require("highlight.js").highlightAuto(code).value;
                }
              }
            }
          ]
        },
        {
          resourceQuery: /blockType=title/,
          use: ["block-loader?optionName=__title"]
        },
        {
          resourceQuery: /blockType=docs/,
          use: ["block-loader?optionName=__docs", "markdown-loader"]
        },
        {
          resourceQuery: /blockType=tip/,
          use: ["block-loader?optionName=__tip", "markdown-loader"]
        },
        {
          resourceQuery: /blockType=condensed/,
          use: "block-loader?optionName=__condensed"
        },
        {
          resourceQuery: /blockType=fullscreen-only/,
          use: "block-loader?optionName=__fullscreenOnly"
        }
      ]
    }
  }
};
