const config = require('./webpack.common.js');
const merge = require('merge-descriptors');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const rulesForCss = {
  test: /\.scss$/,   
  use: [
    MiniCssExtractPlugin.loader,
    // 'style-loader',
    'css-loader',
    {
      loader: "sass-loader",
      options: {
        sourceMap: false,
        sassOptions: {
          outputStyle: "compressed",
        },
      },
    }
  ]
};

const rulesForImg = {
  test: /\.(png|svg|jpg|jpeg|gif)$/i,
  type: 'asset/resource',
  generator: {
    filename: 'img/[hash][ext][query]'
  }
};

const rulesForFonts = {
  test: /\.(woff|woff2|eot|ttf|otf)$/i,
  type: 'asset/resource',
  generator: {
    filename: 'fonts/[hash][ext][query]'
  }
};

const rulesForJS = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  options: {
    presets: ['@babel/preset-env'],
    plugins: [
      "@babel/plugin-transform-runtime"
    ]
  }
};

const rules = [rulesForFonts, rulesForImg, rulesForCss, rulesForJS];

const prodConfig = {
  mode: 'production',
  module: { rules },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/views/index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      filename: 'detail.html',
      template: './src/views/detail.html',
      chunks: ['detail']
    }),
    new MiniCssExtractPlugin({
      filename: 'css/style.[contenthash].css'
    })
  ],
}

module.exports = merge(config, prodConfig);