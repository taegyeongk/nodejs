const { defineConfig } = require('@vue/cli-service')
const target = 'http://localhost:3000'
module.exports = defineConfig({
  transpileDependencies: true,
  devServer : {
    port : 8080,
    proxy : {
      '^/' : {
        target,
        changeOrigin : true
      }
    }
  }  //server 추가 설정, '^/' : 통신에 사용하는 api 주소
  // target : 경로
  // changeOrigin : 시작하는 속성의 오리진을 대체
})
