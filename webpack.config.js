const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('[name].css');


module.exports = {
  entry: [
    './src/index.js'
  ],
  mode: 'production',
  target: "web",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.svg$/,
        // test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: 'url-loader',
            query: { limit : 10000 }
          }
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.styl$/,
        use: extractCSS.extract([ 'css-loader', 'stylus-loader' ]) // , 'postcss-loader'
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
      title: 'AURUS Club',
    }),
    extractCSS,
  ],
};
