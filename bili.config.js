const { version } = require("./package.json");

/** @type {import('bili').Config} */
module.exports = {
  banner: `
/**
 * Fundamental Vue
 * Version: ${version},
 * (c) SAP SE, ${new Date().getFullYear()}
 * LICENCE: Apache-2.0
 * https://github.com/SAP/fundamental-vue
*/`,
  plugins: {
    vue: true,
    commonjs: true
  },
  output: {
    // This will generate a single css file for all the custom styles we need in Fundamental Vue.
    extractCSS: true
  },
  runtimeHelpers: true,
  globals: {
    vue: "Vue"
  }
};
