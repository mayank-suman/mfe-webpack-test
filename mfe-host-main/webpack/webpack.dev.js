const ReactRefreshWebpackPlugin = require('.pnpm/@pmmmwh+react-refresh-webpack-plugin@0.5.15_react-refresh@0.16.0_sockjs-client@1.6.1_type-fes_pv6s5f3qxovwqdwo2ksmoi6wo4/node_modules/@pmmmwh/react-refresh-webpack-plugin');
const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules\//,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [require.resolve('react-refresh/babel')],
            },
          },
        ],
      },
    ],
  },
  plugins: [new ReactRefreshWebpackPlugin()],
  devServer: {
    hot: true,
    port: 8080,
    headers: {
      'Access-Control-Allow-Origin': '*', // Important for Module Federation
    },
  },
});
