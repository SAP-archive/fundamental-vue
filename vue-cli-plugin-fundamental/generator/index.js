// @ts-check
const fs = require("fs");
const getConfig = require("./../config");

/**
 * 
 * @param {any} api 
 * @param {import('./PluginTypes').Dependency[]} dependeciesList 
 */
const safeMakeDependencies = (api, dependeciesList) => {
  const dependenciesObj = {};

  for (let i = 0; i < dependeciesList.length; i++) {
    const dependency = dependeciesList[i];
    if (!api.hasPlugin(dependency.name)) {
      dependenciesObj[dependency.name] = dependency.version;
    }
  }
  return dependenciesObj;
}

module.exports = (api, options = {}, rootOptions) => {
  
  const { dependenciesList, devDependenciesList, successMessage, layoutType, virtualizedListSupportType } = getConfig(options);

  api.extendPackage({
    dependencies: safeMakeDependencies(api, dependenciesList),
    devDependencies: safeMakeDependencies(api, devDependenciesList)
  });

  const fullLayout = layoutType === "full" ? true : false;

  const templtatesOptions = Object.assign(options, {
    fullLayout,
    fullVirtualizedListSupport: virtualizedListSupportType === "with-ie11",
    partialVirtualizedListSupport: virtualizedListSupportType === "without-ie11" || virtualizedListSupportType === "with-ie11"
  });

  api.injectImports(api.entryFile, `import './plugins/fundamental-vue.js'`);

  if (fullLayout) {
    // render everything
    api.render('./template', templtatesOptions);
    api.injectImports(api.entryFile, `import router from './router'`);
  } else {
    api.render({
      "./src/plugins/fundamental-vue.js": "./template/src/plugins/fundamental-vue.js",
      "./src/App.vue": './template/src/App.vue',
      "./src/fundamental.scss": "./template/src/fundamental.scss"
    }, templtatesOptions);
  }

  api.onCreateComplete(() => {
    if (fullLayout) {
      const contentMain = fs.readFileSync(api.entryFile, { encoding: "utf-8" });

      // if router not imported 
      if (! new RegExp(/\s*router/).test(contentMain)) {
        const lines = contentMain.split(/\r?\n/g);

        const renderIndex = lines.findIndex(line => line.match(/render/));
        lines[renderIndex] += `\n  router,`;

        fs.writeFileSync(api.entryFile, lines.join("\n"), { encoding: "utf-8" });
      }

      api.exitLog(successMessage, "done");
    }
  });
};
