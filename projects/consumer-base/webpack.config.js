const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { container, DefinePlugin } = require('webpack');
const createModuleFederationConfig = require("./webpack.modulefederation.config");

const isProduction = process.env.NODE_ENV == 'production';
const projectFlavor = 'unversioned';
const moduleFederationConfig = createModuleFederationConfig(projectFlavor);

const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
  entry: './src/index.tsx',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    open: true,
    host: 'localhost',
    port: 12000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),

    new MiniCssExtractPlugin(),

    new DefinePlugin({
      '____PROJECT_FLAVOR____': JSON.stringify(projectFlavor),
      '____PROJECT_MODULE_FEDERATION_CONFIG_SHARED____': JSON.stringify(moduleFederationConfig.shared),
    }),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    new container.ModuleFederationPlugin(moduleFederationConfig),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        exclude: ['/node_modules/'],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler,'css-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';

  } else {
    config.mode = 'development';
  }
  return config;
};
