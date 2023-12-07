const { defineConfig } = require("@vue/cli-service");
const target = "http://localhost:3000";
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    port: 8080,
    proxy: {
      "^/api": {
        target,
        changeOrigin: true,
        ws: false,
        pathRewrite: { "^/api": "/" },
      }, //localhost8080 을 3000으로 포트 변경해줌
    },
  },
});
