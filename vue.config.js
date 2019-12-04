// @ts-check
/* eslint-env node */

// This require-statement has to be high up – otherwise you will get strange errors.
const Path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const baseUrl = process.env.BASE_URL

const publicPath = baseUrl

// eslint-disable-next-line no-console
console.log('🌈  ', { baseUrl, publicPath })

module.exports = {
  publicPath,
  /**
   * @param {import("webpack-chain")} config
   */
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('fd-src-loader')
      .loader(require.resolve('./loaders/fd-src-loader'))
      .after('vue-loader')

    // config
    //   .plugin('webpack-analyzer')
    //   .use(BundleAnalyzerPlugin, [
    //     {
    //       analyzerPort: 10001,
    //       openAnalyzer: false
    //     }
    //   ])
    //   .end()
    config.module
      .rule('vue')
      .use('fd-component-api-loader')
      .loader('fd-component-api-loader')
      .after('vue-loader')
      .end()

    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(() => {
        return {
          // compilerOptions: {
          //   whitespace: "condense"
          // }
        }
      })

    config.module
      .rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .options({
        // compilerOptions: {
        //   whitespace: "condense"
        // }
      })
      .end()
      .use('fd-markdown-loader')
      .loader('fd-markdown-loader')
      .end()

    config.resolveLoader.modules
      .add('node_modules')
      .add(Path.resolve(__dirname, 'loaders'))
      .end()
  },
  lintOnSave: false
}
module.exports.parallel = false
