const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
};


module.exports = (env, argv) => {

  if (argv.mode === 'development') {
    config.mode = 'development';
    config.output.path = path.resolve(__dirname, 'dist');
  }

  if (argv.mode === 'production') {
    config.mode = 'production';
    config.output.path = path.resolve(__dirname, 'dist_prod');
  }

  return config;
};