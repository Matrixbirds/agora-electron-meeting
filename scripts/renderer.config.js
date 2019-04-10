const path = require("path");
const loaders = require("./loaders");
const plugins = require("./plugins");

module.exports = {
  node: {
    __dirname: true,
  },
  target: 'electron-renderer',
  entry: {
    renderer: './src/renderer/index.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist/renderer')
  },
  module: loaders,
  plugins,
  resolve: {
    extensions: [ ".tsx", ".ts", ".js" ],
  },
  optimization: {
    minimize: false,
  }
};
