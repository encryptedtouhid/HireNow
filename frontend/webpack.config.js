const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
require('dotenv').config(); // Load environment variables from .env file

module.exports = {
  entry: './src/pages/home/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // Add this rule for handling image files
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pages/home/index.html', // Ensure this path is correct
    }),
    new webpack.DefinePlugin({
      'process.env': {
        HIRENOW_APP_API_URL: JSON.stringify(process.env.HIRENOW_APP_API_URL),
        // Add other environment variables here if needed
      },
    }),
  ],
};