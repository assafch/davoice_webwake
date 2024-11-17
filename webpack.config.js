const path = require('path');
const webpack = require('webpack'); // Import the webpack module
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx', // Entry point for your React app
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // Output bundle
    publicPath: '/davoice_webwake/', // Important for GitHub Pages
  },
  performance: {
    hints: false,
  },
  optimization: {
    splitChunks: false, // Disable code splitting
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
          'style-loader',
          'css-loader',
          'postcss-loader', // Ensure postcss-loader is included here
        ],
      },
      {
        test: /\.wasm$/,
        type: 'webassembly/async',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i, // Match image file extensions
        type: 'asset/resource', // Emit separate files and export URLs
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Source HTML file
      filename: 'index.html', // Output file in 'dist' directory
      inject: true, // Ensure scripts are injected
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/audio-worklet-processor.js',
          to: '[name][ext]',
        },
        {
          from: 'models',
          to: 'models', // Copy models to 'dist/models'
        },
        {
          from: path.resolve(
            __dirname,
            'node_modules/keyword-detection-web/dist/*.wasm'
          ),
          to: '[name][ext]', // Copy WASM files to 'dist'
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