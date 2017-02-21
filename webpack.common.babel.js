'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appPath = path.resolve(__dirname, 'app');
const buildPath = path.resolve(__dirname, 'build');

const commonConfig = {

  resolve: {
    extensions: ['', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(appPath, 'index.html')
    })
  ]
}

module.exports = {
  appPath,
  buildPath,
  commonConfig
};
