const path = require('path');

module.exports = {
  entry: {
    index: './src/js/index.js',
    detail: './src/js/detail.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[contenthash].js',
    clean: true,
  }
}