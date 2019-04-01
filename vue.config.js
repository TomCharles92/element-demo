module.exports = {
  devServer: {
    proxy: {
      '/zhihu': {
        target: 'http://news-at.zhihu.com',
        ws: true, // proxy websockets
        changeOrigin: true, // needed for virtual hosted sites
        pathRewrite: { '^/zhihu': '' }
      }
    }
  }
}
