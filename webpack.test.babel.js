'use strict';

import nodeExternals from 'webpack-node-externals';

module.exports = {
  devtool: 'inline-source-map',

  externals: [nodeExternals()],

  resolve: {
    extensions: ['', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
}
