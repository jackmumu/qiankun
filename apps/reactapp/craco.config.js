const { name } = require("./package");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.output.library = `${name}-[name]`;
      webpackConfig.output.libraryTarget = "umd";
      webpackConfig.output.chunkLoadingGlobal = `webpackJsonp_${name}`;
      webpackConfig.output.globalObject = "window";
      return webpackConfig;
    },
  },
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    historyApiFallback: true,
    hot: false,
    liveReload: false,
    port: 3003,
    static: {
      watch: true, // 使用 static.watch 替代 watchContentBase
    },
  },
};
