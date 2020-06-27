/* config.module.rule('svg') */
{
  test: /\.(svg)(\?.*)?$/,
  rules: [
    /* config.module.rule('svg').rule('css-loader') */
    {
      resourceQuery: /css-loader/,
      use: [
        /* config.module.rule('svg').rule('css-loader').use('css-loader') */
        {
          loader: 'css-loader'
        }
      ]
    },
    /* config.module.rule('svg').rule('postcss') */
    {
      resourceQuery: /postcss/,
      use: [
        /* config.module.rule('svg').rule('postcss').use('postcss') */
        {
          loader: 'postcss-loader'
        }
      ]
    }
  ],
  use: [
    /* config.module.rule('svg').use('style') */
    {
      loader: 'style-loader'
    }
  ]
}
