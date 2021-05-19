module.exports = {
  devServer: {
      port: 8800, // 启动端口
      open: false  // 启动后是否自动打开网页
  },
  // 配置less
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
}
