const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    server: './src/main.server.ts',
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  target: 'node',
  externals: [/node_modules/],
  output: {
    path: path.join(__dirname, 'dist', 'server'),
    filename: '[name].js',
  },
  module: {
    rules: [
      // Include necessary loaders for TypeScript, CSS, etc.
    ],
  },
  plugins: [
    // Include necessary plugins for optimization, etc.
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
};
