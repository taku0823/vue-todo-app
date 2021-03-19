const path = require('path');
const { VueLoaderPlugin } = require('vue-loader-v16');

const src = path.resolve(__dirname, './src');
const dist = path.resolve(__dirname, './dist');

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.vue', '.js', '.json']
  },
  entry: `${src}/js/index.js`,
  output: {
    path: dist,
    filename: 'js/main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader-v16'
      },
      {
        test: /\.(scss|css)/,
        exclude: /node_modules/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [new VueLoaderPlugin()],
  devServer: {
    open: true,
    inline: true,
    hot: true,
    port: 8080,
    contentBase: dist,
    historyApiFallback: true
  }
};
