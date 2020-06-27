/* config.module.rule('svg') */
{
  test: /\.(svg)(\?.*)?$/,
  rules: [
    /* config.module.rule('svg').rule('inline') */
    {
      use: [
        /* config.module.rule('svg').rule('inline').use('vue-svg-loader') */
        {
          loader: 'vue-svg-loader'
        },
        /* config.module.rule('svg').rule('inline').use('file-loader') */
        {
          loader: 'file-loader',
          options: {
            name: 'img/[name].[hash:8].[ext]'
          }
        }
      ]
    }
  ],
  use: [
    /* config.module.rule('svg').use('svgo-loader') */
    {
      loader: 'svgo-loader',
      options: {
        plugins: [
          {
            removeViewBox: false
          },
          {
            removeDimensions: true
          }
        ]
      }
    }
  ]
}
