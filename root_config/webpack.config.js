const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require('path');
const fs = require('fs');

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "ag1",
    projectName: "root-config",
    webpackConfigEnv,
  });

  return webpackMerge.smart(defaultConfig, {
    entry: path.resolve(__dirname, "src/app"),
    output: {
      filename: "root-config.js",
      libraryTarget: "system",
      path: path.resolve(__dirname, "dist"),
    },
    devtool: "sourcemap",
    module: {
      rules: [
        { parser: { system: false } },
      ],
    },
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      disableHostCheck: true,
      historyApiFallback: true,
      http2: true,
      https: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal === "true",
        },
      }),
      new CleanWebpackPlugin(),
    ],
    externals: ["single-spa", "vue", "vue-router", /^@ag1\/.+$/],
  });
};
