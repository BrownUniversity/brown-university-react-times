const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const svgRule = require("./rules/svg");
const { version } = require("../package.json");

const runAnalyzer = process.env.RUN_WEBPACK_BUNDLE_ANALYZER;

module.exports = {
  mode: "none",
  entry: path.join(__dirname, "../src/index.js"),
  output: {
    filename: "index.commonjs.js",
    path: path.resolve(__dirname, "./dist"),
    libraryTarget: "umd"
  },
  externals: {
    "brown-university-styles": "brown-university-styles",
    react: "react",
    "styled-components": "styled-components",
    "prop-types": "prop-types"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      svgRule
    ]
  },
  plugins: [
    new webpack.BannerPlugin(`brown-university-react-times v${version}`),
    new CleanWebpackPlugin(["dist"], {
      root: `${__dirname}/../`,
      exclude: ["es"]
    }),
    runAnalyzer && new BundleAnalyzerPlugin()
  ].filter(Boolean)
};
