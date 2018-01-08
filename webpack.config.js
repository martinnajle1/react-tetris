var path = require('path');
var webpack = require('webpack');
const PORT = process.env.PORT || 3000;
module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:'+PORT,
    './src/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  devServer: {

    compress: true,

    disableHostCheck: true,   // That solved it

 },      
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  externals:[{
    xmlhttprequest: '{XMLHttpRequest:XMLHttpRequest}'
}]
}
