const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const webpack = require("webpack"); // 导入 webpack 模块
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    plugins: [
      new webpack.DefinePlugin({
        __DEV__: JSON.stringify(process.env.NODE_ENV === "development"),
      }),
    ],
  },
  css: {
    loaderOptions: {
      sass: {
        // 这里可以添加全局的 SCSS 变量或混入
        additionalData: `@import "@/styles/BEM.scss";`,
      },
    },
  },
});
