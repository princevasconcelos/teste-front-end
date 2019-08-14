const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const jsRegex = /\.js$/;
const cssRegex = /\.scss$/;

exports.generateHtml = ({ title } = {}) => ({
  plugins: [
    new HtmlWebpackPlugin({
      title,
    }),
  ],
});

exports.cleanDist = () => ({
  plugins: [new CleanWebpackPlugin()],
});

exports.devServer = ({ host, port } = {}) => ({
  devServer: {
    stats: 'errors-only',
    host,
    port,
    open: false,
    overlay: true,
  },
});

exports.loadCss = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: cssRegex,
        include,
        exclude,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
});

exports.loadJs = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: jsRegex,
        include,
        exclude,
        use: 'babel-loader',
      },
    ],
  },
});

exports.generateSourceMaps = ({ type }) => ({
  devtool: type,
});

exports.output = ({ path, filename, chunkFilename } = {}) => ({
  output: {
    path,
    filename,
    chunkFilename,
  },
});
