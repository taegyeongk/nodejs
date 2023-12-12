const { defineConfig } = require("@vue/cli-service");
const target = "http://localhost:3000";

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    port: 8080,
    // 서버를 혼란시키는 역할 proxy / ^/api : proxy 가 적용되어야 할 곳에 구분하여 이름을 붙여줌.api 로 시작하는 통신에 대해서
    proxy: {
      "^/api": {
        target,
        changeOrigin: true,
        ws: false,
        pathRewrite: { "^/api": "/" },
      },
    },
  },
});
