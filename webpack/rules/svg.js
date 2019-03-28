module.exports = {
  test: /\.svg$/,
  use: {
    loader: "react-svg-loader",
    options: {
      svgo: {
        plugins: [
          {
            cleanupIDs: false
          },
          {
            removeUnknownsAndDefaults: false
          }
        ]
      }
    }
  }
};
