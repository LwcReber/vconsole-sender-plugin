var pkg = require('./package.json');
var webpack = require('webpack');
var path = require('path')

module.exports = {
  mode: "production",
  entry: {
    'vconsole-sender-plugin' : './src/index.js'
  },
  devtool: "source-map",
  output: {
    path: path.join(__dirname, './dist'),
    filename: "[name].js",
    library: "VConsoleSenderPlugin",
    libraryTarget: "umd",
    umdNamedDefine: true,
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.js$/, use: ['babel-loader']
      }
    ]
  }
};