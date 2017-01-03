'use strict';

let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');

const mainPath = path.resolve(__dirname, 'app');
const buildPath = path.resolve(__dirname, 'build');

let configHot = {
  devtool: 'eval-source-map',

  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    mainPath
  ],

  // output: {
    // path: buildPath,
    // filename: 'bundle.js',
  // },

  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.js$/,
          loader: 'babel-loader'
      }
    ]
  },

  resolve: {
    extensions: ['', '.js']
  },

  devServer: {
    // contentBase: './build/',
    hot: true,
    // inline: true,
    progress: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'app', 'index.html')
    })
  ]
}

module.exports = configHot;
