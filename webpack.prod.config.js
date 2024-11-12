import webpack from 'webpack';

export default {
  mode: "production",

  // メインのJS
  entry: {
    common: "./source/js/common.js",
  },
  // 出力ファイル
  output: {
    filename: "./js/[name].js"
  },

  // plugins: [
  //   new webpack.BannerPlugin({
  //     banner: `
  //       /*! splide | Copyright (c) 2022 Naotoshi Fujita | https://github.com/Splidejs/splide/blob/master/LICENSE */
  //     `,
  //     raw: true
  //   })
  // ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      }
    ]
  }
}
