const Path = require("path");

module.exports = {
  lintOnSave: false,
  runtimeCompiler: false,
  configureWebpack: {
    entry: "./src/index.ts",
    output: {
      libraryExport: "default"
    },
    resolveLoader: {
      modules: [
        "node_modules",
        Path.resolve(__dirname, "loaders"),
        Path.resolve(__dirname, "src", "docs", "node_modules")
      ]
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
                highlight: function (code) {
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
