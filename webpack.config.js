var HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output:{
    path: 'dest',
    filename: 'bundle.js'
  },
  module:{
    loaders:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader','react-hot-loader/webpack']
      },
      {
        test: /\.css$/,
        loaders: "style-loader!css-loader"
      }
    ]
  },
  plugins:[
    new HTMLWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
