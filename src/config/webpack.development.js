const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin({
  filename: '[name]-style.css',
  allChunks: true
});

module.exports = {
  entry: [
    './src/index.js'
  ],
  mode: 'development',
  target: "web",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(svg|png|jp(e*)g|webp)$/,
        loader: 'file-loader',
        options: {
          name: `images/[name].[ext]`
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.styl$/,
        use: extractCSS.extract(
          [ 'css-loader', 'stylus-loader' ]
        ),
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        loader: 'url-loader?limit=30000',
        options: {
            name: 'fonts/[name].[ext]',
            limit: 50,
        },
      }
    ]
  },
  optimization: {
   // minimize: false,
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '',
    filename: '[name]-bundle.js',
    chunkFilename: '[name].bundle.js',
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      filename: "index.html",
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
      title: 'Dev Aurus',
    }),
    extractCSS,
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    })
  ]
};