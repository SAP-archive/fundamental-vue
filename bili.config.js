/* eslint-env node */

const { version } = require("./package.json");
const Path = require("path");
const Process = require("process");

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
  babel: {
    configFile: Path.join(Process.cwd(), "bili-babel.config.js"),
    babelrc: false
  },
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
