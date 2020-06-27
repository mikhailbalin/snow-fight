module.exports = {
  transpileDependencies: ['vuetify'],
  pwa: {
    name: 'Snow Fight',
    themeColor: '#4688F1'
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();

    svgRule
      .use('svgo-loader')
      .loader('svgo-loader')
      .options({
        plugins: [{ removeViewBox: false }, { removeDimensions: true }]
      })
      .end()

      .rule('inline')
      // .resourceQuery(/inline/)
      // .after('css-loader')
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .end()
      // .end()

      // .rule('external')
      // .resourceQuery(/css-loader/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'img/[name].[hash:8].[ext]'
      });

    // // .oneOf('inline')
    // // .resourceQuery(/inline/)
    // .use('vue-svg-loader')
    // .loader('vue-svg-loader')
    // .end()
    // // .end()

    // // .oneOf('external')
    // // .use('file-loader')
    // // .loader('file-loader')
    // // .options({
    // //   name: 'img/[name].[hash:8].[ext]'
    // // })
    // // .end()
    // // .end()

    // .use('svgo-loader')
    // .loader('svgo-loader')
    // .options({
    //   plugins: [{ removeViewBox: false }, { removeDimensions: true }]
    // })
  }
};
