'use strict';

import path from 'path';

import webpack from 'webpack';
import UglifyJsPlugin from 'webpack/lib/optimize/UglifyJsPlugin';

import webpackMerge from 'webpack-merge';
import { appPath, buildPath, commonConfig } from './webpack.common.babel'

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  entry: {
    app: path.join(appPath, 'js', 'main.js'),
    vendor: path.join(appPath, 'js', 'vendor.js')
  },

  output: {
    path: buildPath,
    filename: 'js/[name].[chunkhash].bundle.js',
    sourceMapFileName: 'js/[name].[chunkhash].bundle.map',
    chungFilename: 'js/[id].[chunkhash].chunk.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]

  },

  plugins: [
    new UglifyJsPlugin({
      compress: true,
      mangle: true,
      beautify: false,
      comments: false
    })
  ]
});
