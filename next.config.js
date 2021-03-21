module.exports = {
  pageExtensions: ["mdx", "tsx", "ts", "jsx", "js"],
  webpack(config) {
    config.module.rules.push({
      test: /\.mdx$/,
      use: {
        loader: "xdm/webpack.cjs",
        options: {},
      },
    });
    return config;
  },
};
