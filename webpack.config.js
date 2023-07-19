const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: process.env.NODE_ENV || 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  devServer: {
    allowedHosts: "all",
    static: {
      directory: path.join(__dirname, '/')
    }
  },
  module: {
    rules: [
      {
        test: /\.wasm$/,
        type: 'webassembly/async',
      }
    ]
  },
  experiments: {
    asyncWebAssembly: true,
  }
};