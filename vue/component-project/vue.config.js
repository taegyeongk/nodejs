const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave : false //1단어로 작업할 경우 오류날때 수정법
})
