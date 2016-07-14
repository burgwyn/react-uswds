var path = require('path');
var webpack = require('webpack');

module.exports = {
  cache: true,
  entry: ['babel-polyfill','./index.js'],
  output: {
    filename: 'app.js'
  },
  module: {
    loaders: [   
        { 
            test: /\.(js|jsx)$/,
            loader: 'react-hot!babel-loader',
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        },
        { 
            test: /\.png$/, 
            loader: 'url-loader?limit=100000'
        },
        { 
            test: /\.gif$/, 
            loader: 'file-loader'
        },
        { 
            test: /\.jpg$/, 
            loader: 'file-loader'
        },
        {
            test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
            loader: 'url?limit=10000&mimetype=application/font-woff'
        },
        {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
            loader: 'url?limit=10000&mimetype=application/octet-stream'
        },
        {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
            loader: 'file-loader'
        },
        {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
            loader: 'url?limit=10000&mimetype=image/svg+xml'
        }
    ],
    plugins: [
    ]
  }
};
