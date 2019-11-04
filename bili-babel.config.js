/* eslint-env node */

const presets = [
  [
    '@vue/app',
    {
      useBuiltIns: false,
      polyfills: false,
      corejs: undefined
    }
  ]
]

module.exports = {
  presets,
  plugins: ['@babel/plugin-syntax-dynamic-import']
}
