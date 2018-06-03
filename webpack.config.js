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
        use: ['babel-loader'],
      },
      {
        test: /\.(svg|png|jp(e*)g)$/,
        loader: 'file-loader',
        options: {
          name: `images/[name]-[hash].[ext]`
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.styl$/,
        use: extractCSS.extract(
          [ 'css-loader','stylus-loader' ] // TODO css modules
        )
      },

      {
        test: /\.(eot|woff|woff2|ttf)$/,
        loader: 'url-loader?limit=30000',
        options: {
            name: 'fonts/[name]-[hash].[ext]',
            limit: 50,
        },
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
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
