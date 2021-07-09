const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const GasPlugin = require('gas-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const webpack = require('webpack');

const getSrcPath = (filePath) => {
  const src = path.resolve(__dirname, 'src');
  return path.posix.join(src.replace(/\\/g, '/'), filePath);
};

module.exports = {
  mode: 'production',
  entry: getSrcPath('/index.ts'),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      module: {
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
          plugins: [
            [
              '@babel/plugin-proposal-object-rest-spread',
              { loose: true, useBuiltIns: true },
            ],
          ],
        },
      },
    },
  ],
},

],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'var',
    library: 'sl',
    clean: true,
  },
  optimization: {
    minimize: false,
  },
  performance: {
    hints: false,
  },
  plugins: [
    new ESLintPlugin(),
    new webpack.ProgressPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: getSrcPath('**/*.html'),
          to: '[name][ext]',
          noErrorOnMissing: true,
        },
        {
          from: getSrcPath('../appsscript.json'),
          to: '[name][ext]',
        },
        {
          from: getSrcPath('../functions/*.js'),
          to: '[name][ext]',
          noErrorOnMissing: true,
        },
        {
          from: getSrcPath('../src/gas/*.js'),
          to: 'gas_[name][ext]',
          noErrorOnMissing: true,
        },
        {
          from: getSrcPath('../node_modules/apps-script-oauth2/dist/OAuth2.gs'),
          to: 'OAuth2.js',
        },
      ],
    }),
    new GasPlugin({
      comments: false,
      source: 'digitalinspiration.com',
    }),
  ],
};
