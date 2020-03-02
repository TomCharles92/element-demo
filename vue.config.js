module.exports = {
  devServer: {
    proxy: {
      '/zhihu': {
        target: 'http://news-at.zhihu.com',
        ws: true, // proxy websockets
        changeOrigin: true, // needed for virtual hosted sites
        pathRewrite: { '^/zhihu': '' }
      },
      // 用于文件下载的服务，是 abscloud-lite-app 的后台服务
      '/abscloudLite': {
        target: 'http://localhost:8181',
        ws: true, // proxy websockets
        changeOrigin: true, // needed for virtual hosted sites
        pathRewrite: { '^/abscloudLite': '' }
      },
      // http://speedtest.london.linode.com/100MB-london.bin
      '/speedtest': {
        target: 'http://speedtest.london.linode.com',
        ws: true, // proxy websockets
        changeOrigin: true, // needed for virtual hosted sites
        pathRewrite: { '^/speedtest': '' }
      },
    }
  },
  configureWebpack: {
    // 配置调试工具
    devtool: 'source-map'
  }
}
