const path = require('path');
const merge = require('webpack-merge');

const configParts = require('./webpack.parts');

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist'),
};

const commonConfig = merge([
  {
    entry: './src/index.js',
    output: {
      filename: '[name].bundle.js',
      path: PATHS.dist,
    },
  },

  configParts.cleanDist(),

  configParts.generateHtml({
    title: 'OSF Challenge',
  }),

  configParts.loadJs({
    include: PATHS.src,
  }),
]);

const devConfig = merge([
  configParts.output({
    path: PATHS.dist,
    filename: '[name].bundle.js',
  }),

  configParts.devServer(),

  configParts.generateSourceMaps({
    type: 'cheap-module-eval-source-map',
  }),

  configParts.loadCss({
    include: PATHS.src,
  }),
]);

module.exports = (mode) => merge([commonConfig, devConfig, { mode }]);
