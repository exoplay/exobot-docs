const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const routes = require('./pages/routes');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: '.',
  exportPathMap: function () {
    return routes;
  },
  webpack: (config, { dev }) => {
    config.plugins = config.plugins.slice(0, config.plugins.length -1)
    return config;
  },
  webpackDevMiddleware: config => {
    return config;
  }
}
