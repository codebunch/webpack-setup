const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

 module.exports = {
   entry: './src/index.js',
   plugins: [
    new HtmlWebpackPlugin({
     title: 'Caching',
     template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css" // change this RELATIVE to your output.path!
    }),
  ],
   output: {
     filename: '[name].[contenthash].js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
    optimization: {
      runtimeChunk: 'single',
     splitChunks: {
       cacheGroups: {
         vendor: {
           test: /[\\/]node_modules[\\/]/,
           name: 'vendors',
           chunks: 'all',
         },
       },
     },
    },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: "file-loader",
      },
    ],
  },
 };