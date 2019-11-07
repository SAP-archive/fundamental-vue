// @ts-check
/** @param {import("./generator/PluginTypes").VirtualizedListSupportType} supportType */
const virtualizedListDependenciesFromSupportType = supportType => {
  

  if (supportType === "none") {
    return [];
  }

  const withoutIE11Deps = [
    { name: "vue-virtual-scroller", version: "^1.0.0-rc.2" },
    { name: "vue-observe-visibility", version: "^0.4.4" }
  ];

  if (supportType === "without-ie11") {
    return withoutIE11Deps;
  }
  if (supportType === "with-ie11") {
    return withoutIE11Deps.concat({name: "intersection-observer", version: "^0.7.0"});
  }

  console.error(`Unknown virtualizedListSupportType: ${supportType}. Expected one of 'none', 'with-ie11', 'without-ie11'`);
  return [];
}

/**
 * @param {import("./generator/PluginTypes").RawConfigOptions} options
 * @returns {import("./generator/PluginTypes").NormalizedConfig}
 */
module.exports = ({
  layoutType = "full",
  virtualizedListSupportType = "with-ie11"
}) => {

  let dependenciesList = [
    { name: "fundamental-vue", version: "^0.13.0"},
    { name: "fundamental-styles", version: "^0.1.0"}
  ];

  if (layoutType === "full") {
    dependenciesList.push({ name: "vue-router", version: "^3.0.6" })
  }

  dependenciesList = dependenciesList.concat(virtualizedListDependenciesFromSupportType(virtualizedListSupportType));

  return {
    layoutType,
    virtualizedListSupportType,
    dependenciesList,
    devDependenciesList: [
      { name: "node-sass", version:"^4.12.0" },
      { name: "sass-loader", version:"^7.1.0" }
    ],
    successMessage: "🌈 Successfully installed Fundamental Vue."
  };
};
