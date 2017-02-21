'use strict';

import path from 'path';

import webpack from 'webpack';

import webpackMerge from 'webpack-merge';
import { appPath, buildPath, commonConfig } from './webpack.common.babel'

module.exports = webpackMerge(commonConfig, {
  devtool: 'eval-source-map',

  entry: {
    app: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080',
      path.join(appPath, 'js', 'main.js')
    ],
    vendor: path.join(appPath, 'js', 'vendor.js')
  },

  output: {
    path: buildPath,
    filename: 'js/[name].[hash].bundle.js',
    sourceMapFileName: 'js/[name].[hash].bundle.map',
    chungFilename: 'js/[id].[hash].chunk.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {compact: false}
      }
    ]
  },

  devServer: {
    hot: true,
    progress: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
