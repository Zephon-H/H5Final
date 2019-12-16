module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://www.ncmtr.com',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    }
  }
}