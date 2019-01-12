const Path = require('path');

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
        .tap(() => {
          return {
            highlight: function(code) {
              return require('highlight.js').highlightAuto(code).value;
            },
        }
      })
      .end()
  },
  configureWebpack: {
    output: {
      libraryExport: 'default'
    },
    resolveLoader: {
      modules: [
        'node_modules',
        Path.resolve(__dirname, 'loaders')
      ],
    },
    module: {
      rules: [
         {
          resourceQuery: /blockType=title/,
          use: [
            'block-loader?optionName=__title',
          ],
        },
        {
          resourceQuery: /blockType=docs/,
          use: [
            'block-loader?optionName=__docs',
            'markdown-loader',
          ],
        },
        {
          resourceQuery: /blockType=tip/,
          use: [
            'block-loader?optionName=__tip',
            'markdown-loader',
          ],
        },
        {
          resourceQuery: /blockType=condensed/,
          use: 'block-loader?optionName=__condensed',
        },
        {
          resourceQuery: /blockType=fullscreen-only/,
          use: 'block-loader?optionName=__fullscreenOnly',
        },
      ],
    },
  },
};
