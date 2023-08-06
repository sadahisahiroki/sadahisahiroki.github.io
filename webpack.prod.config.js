let webpack = require("webpack");
module.exports = {
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
  //       /*! vue@3.2.40 | Copyright (c) 2018-present, Yuxi (Evan) You | https://github.com/vuejs/vue/blob/dev/LICENSE */
  //     `,
  //     raw: true
  //   })
  // ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm-bundler.js',
    }
  },
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
