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
    commonjs: true,
  },
  runtimeHelpers: true,
  globals: {
    vue: "Vue",
  },
}
