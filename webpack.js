const webpack = require("webpack");
const path = require("path");

module.exports = {
  // Standard webpack stuff
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    // https://webpack.js.org/plugins/normal-module-replacement-plugin/
    new webpack.NormalModuleReplacementPlugin(
      /\/src\/ophan\.js/,
      "replaceOphan.js"
    ),
  ],
  mode: "development",
};
