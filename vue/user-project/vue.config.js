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

        ws: false, //ws : 웹 소켓 지원, 무한적으로 반복되는 문제점을 막아줌
        pathRewrite: { "^/api": "/" }, // api를 생략하고 /로 접근할 수 있도록 함
      },
    },
  }, //server 추가 설정, '^/' : 통신에 사용하는 api 주소
  // target : 경로
  //proxy: 대체서버
  // changeOrigin : 시작하는 속성의 오리진을 대체
});
