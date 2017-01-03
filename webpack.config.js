'use strict';

const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appPath = path.resolve(__dirname, 'app');
const buildPath = path.resolve(__dirname, 'build');

const config = {
  devtool: 'source-map',

  entry: appPath,

  output: {
    path: buildPath,
    filename: 'js/[name].[chunkhash].bundle.js',
    sourceMapFileName: 'js/[name].[chunkhash].bundle.map',
    chungFilename: 'js/[id].[chunkhash].chunk.js'
  },

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
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }

    ]

  },

  plugins: [
    new UglifyJsPlugin({
      compress: true,
      mangle: true,
      beautify: false,
      comments: false
    }),

    new HtmlWebpackPlugin({
      template: path.join(appPath, 'index.html')
    })

  ]
}

module.exports = config;
