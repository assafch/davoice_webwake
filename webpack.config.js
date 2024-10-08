const path = require('path');
const fs = require('fs');
const webpack = require('webpack'); // Import the webpack module
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx', // Entry point for your React app
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // Output bundle
  },
  performance: {
    hints: false,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules/keyword-detection-web'), // Include the library
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Add '@babel/preset-react'
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', // Injects styles into the DOM
          'css-loader',   // Parses CSS files
        ],
      },
      {
        test: /\.wasm$/,
        type: 'webassembly/async',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Source HTML file
      filename: 'index.html', // Output file in 'dist' directory
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/audio-worklet-processor.js', to: '[name][ext]' }, // Copy models to 'dist/models'
        { from: 'models', to: 'models' }, // Copy models to 'dist/models'
        {
          from: path.resolve(
            __dirname,
            'node_modules/keyword-detection-web/dist/*.wasm'
          ),
          to: '[name][ext]', // Copy WASM files to dist
        },
      ],
    }),
    new webpack.ContextReplacementPlugin(
      /keyword-detection-web[\/\\]dist/,
      path.resolve(__dirname, 'node_modules/keyword-detection-web/dist'),
      {}
    ), // Add the ContextReplacementPlugin
  ],
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve .jsx files
  },
  devServer: {
    static: path.join(__dirname, 'dist'), // Serve the 'dist' folder
    compress: true,
    port: 8080, // Port for development server
    https: true, // Enable HTTPS
    historyApiFallback: true, // Redirect 404s to /index.html
  },
  mode: 'production',
};
