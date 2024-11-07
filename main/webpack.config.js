const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");

module.exports = {
  entry: "./index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /\.(le|c)ss$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".vue"],
    alias: {
      vue$: "vue/dist/vue.esm-bundler.js",
    },
    mainFields: ["browser", "module", "main"],
  },
  plugins: [new VueLoaderPlugin()],
  devServer: {
    port: 3000,
  },
};
