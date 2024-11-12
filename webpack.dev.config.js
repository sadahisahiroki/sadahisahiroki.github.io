export default {
  mode: "development",

  // メインのJS
  entry: {
    common: "./source/js/common.js",
  },
  // 出力ファイル
  output: {
    filename: "./js/[name].js"
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
};
