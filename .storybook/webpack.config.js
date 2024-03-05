module.exports = ({ config }) => ({
  ...config,
  module: {
    ...config.module,
    rules: [
      ...config.module.rules.map((rule) => {
        if (/svg/.test(rule.test)) {
          return { ...rule, exclude: /chevron-/ };
        }

        return rule;
      }),
      {
        test: /\.svg$/,
        include: /chevron-/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "react-svg-loader",
            options: {
              svgo: {
                plugins: [
                  {
                    cleanupIDs: false,
                  },
                  {
                    removeUnknownsAndDefaults: false,
                  },
                ],
              },
            },
          },
        ],
      },
    ],
  },
});
