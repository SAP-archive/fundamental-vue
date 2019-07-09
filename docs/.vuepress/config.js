const FS = require("fs");
const Path = require("path");
const readmePath = Path.resolve(process.cwd(), "README.md");
const base = process.env.FD_VP_BASE || "/";

module.exports = {
  base,
  additionalPages: [
    {path: "/", content: FS.readFileSync(readmePath, "utf-8") }
  ],
  configureWebpack: {
    resolve: {
      extensions: [".js", ".vue"],
      alias: {
        vue$: "vue/dist/vue.runtime.min.js"
      }
    }
  },
  plugins: [
    [
      "container",
      {
        type: "example",
        before: filename => `<d-example filename="${filename}">`,
        after: filename => "</d-example>"
      }
    ],
    "clean-urls",
    require("./vuepress-fundamental-plugin")
  ]
};
