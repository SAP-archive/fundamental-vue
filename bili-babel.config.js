/* eslint-env node */

const presets = [
  [
    "@vue/app",
    {
      useBuiltIns: false,
      polyfills: false,
      corejs: 2
    }
  ]
];

module.exports = {
  presets,
  plugins: ["@babel/plugin-syntax-dynamic-import"]
};
