const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.jsx', // Entry point for your React app
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // Output bundle
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
        test: /\.wasm$/,
        type: 'webassembly/async',
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
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
  ],
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve .jsx files
  },
  devServer: {
    static: path.join(__dirname, 'dist'), // Serve the 'dist' folder
    compress: true,
    port: 8080, // Port for development server
    historyApiFallback: true,
  },
  mode: 'production',
};
