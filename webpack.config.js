const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./src/main.js', './src/main.css'],
  
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css-loader!postcss-loader'),
      },
    ],
  },

  devServer: {
    contentBase: './public',
    port: 8080,
    inline: true,
    historyApiFallback: true,
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
  ],

  devtool: 'source-map',
};
