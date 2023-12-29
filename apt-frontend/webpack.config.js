const path = require('path');

const webpack = require('webpack');

const isProduction = process.env.NODE_ENV === 'production';

const config = {
  mode: isProduction ? 'production' : 'development',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'apt-frontend.js',
    publicPath: '/modules/apt-frontend',
    libraryTarget: 'system',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx'],
  },
};

if (!isProduction) {
  config.entry = ['webpack-hot-middleware/client', config.entry];
  config.plugins = [new webpack.HotModuleReplacementPlugin()];
}

module.exports = config;
