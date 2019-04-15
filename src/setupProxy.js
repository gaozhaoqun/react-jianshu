const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    // https://www.bilibili.com/index/recommend.json
    proxy(
      '/index/recommend.json', {
        target: 'https://www.bilibili.com',
        changeOrigin: true
      }
    )
  )

  // https://api.douban.com/v2/movie/in_theaters
  app.use(
    proxy(
      '/v2/movie/in_theaters', {
        target: 'https://api.douban.com',
        changeOrigin: true
      }
    )
  )
}
