const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

const assetsFolderName = 'assets';

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    assetModuleFilename: `${assetsFolderName}/[hash][ext][query]`,
    path: path.resolve(__dirname, '../dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules\//,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|gif|jpe?g|png|webp)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'main_remote',
      remotes: {
        mfe_host: 'component_lib@http://localhost:3001/library.js',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: '^19.0.0',
          eager: true,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: '^19.0.0',
          eager: true,
        },
      },
    }),
  ],
};
