const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin({
  filename: '[name]-style.css',
  allChunks: true
});

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
        test: /\.(svg|png|jp(e*)g|webp)$/,
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
          [ 'css-loader', 'stylus-loader' ]
        ),
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
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: {
          ecma: 8,
          warnings: false,
          output: {
            comments: false,
            beautify: false,
          },
          toplevel: true,// danger https://webpack.js.org/plugins/uglifyjs-webpack-plugin/
        },
      }),
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/../../dist',
    publicPath: '',
    filename: '[name]-bundle.js',
    chunkFilename: '[name].bundle.js',
    devtoolNamespace: '[name]',
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
      title: 'Aurus',
      minify: {
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true,
        removeRedundantAttributes: true,
        sortAttributes: true,
        sortClassName: true,
      },
    }),
    extractCSS,
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ],
};
