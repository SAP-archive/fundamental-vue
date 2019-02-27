module.exports = {
  chainWebpack: config => {
    config
      .entry("app")
      .clear()
      .add("./src/index.ts");

    config.output.set("libraryExport", "default");
  }
};
