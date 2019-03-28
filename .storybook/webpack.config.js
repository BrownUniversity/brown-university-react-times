const svgRule = require("../webpack/rules/svg");

module.exports = ({ config }) => ({
  ...config,
  module: {
    ...config.module,
    rules: [
      {
        test: /\.js(x)?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              babelrc: false,
              plugins: ["babel-plugin-styled-components"],
              presets: ["@babel/preset-env", "@babel/preset-react"]
            }
          }
        ],
        exclude: /node_module/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      svgRule,
      {
        test: /\.woff$/,
        use: "file-loader?name=[name].[ext]"
      }
    ]
  }
});
