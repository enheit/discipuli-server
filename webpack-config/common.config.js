import path from 'path';
import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';

const common = {
  entry: [
    './src/server.entry',
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
};

export default common;