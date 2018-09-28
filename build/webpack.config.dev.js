'use strict'
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  mode: 'development',
  
  entry: [
    './src/app.js'
  ],
  devServer: {
    port: 2000,
    hot: true,
    watchOptions: {
      poll: true
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
       {
        test: /\.(css|scss)?$/,
        use: [ 'vue-style-loader', 'css-loader?-minimize','sass-loader?sourceMap' ]
      },
      { 
        test: /\.jpg|png$/, 
        loader: "file-loader" 
    },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [require('@babel/plugin-proposal-object-rest-spread')]
          }
        }
      }
    ]
  },
  //optimization: {
 //   minimizer: [new UglifyJsPlugin()]
 // },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
  //  new UglifyJsPlugin({
   //   test: /\.js(\?.*)?$/i
    //})
  ]
}