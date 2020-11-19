module.exports = {
  devServer: {
    proxy: {
      '/ajax': { // '*' 如果是* 代表所有的请求都会被代理
        target: 'https://m.maoyan.com', // 只要是/ajax开头的都会转换到https://m.maoyan.com这里的服务器去请求
        // ws: true,
        changeOrigin: true
      }
    //   如果后端接口不止一个 就可以继续如下代码配置
    // '/foo': {
    //   target: '<other_url>'
    // }
    }
  }
}
