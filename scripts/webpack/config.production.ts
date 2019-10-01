import path from 'path';
import webpack from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

const config: webpack.Configuration = {
  mode: 'production', // webpack applies its default production mode optimizations
  entry: {
    'index.min': './src/index.ts',
  },
  plugins: [
    new CleanWebpackPlugin(), // clears dist folder before building
    new CopyPlugin([
      { from: path.resolve(__dirname, '../../npm'), to: path.resolve(__dirname, '../../dist') }, // copy files from npm to dist
      { from: path.resolve(__dirname, '../../src'), to: path.resolve(__dirname, '../../dist'), ignore: ['*.ts', '*.tsx'] } // copy all files from src exept .ts and .tsx files
    ]),
  ],
  devtool: "source-map", // gives sorce map files
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader', // compiles .ts, .tsx files
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', // compiles styles
          'css-loader', // compiles css files
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs',
  },
};

export default config;