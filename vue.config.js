
module.exports = {
  runtimeCompiler: true,
  chainWebpack: config => {
    config.module
      .rule('raw-loader')
      .test(/\.example$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end()

    config.module
      .rule('html-loader')
      .test(/\.md$/)
      .use('html-loader')
      .loader('html-loader')
      .end()
      .use('markdown-loader')
      .loader('markdown-loader')
      .end()
  }
}
