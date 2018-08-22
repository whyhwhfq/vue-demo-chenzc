module.exports = {
  /*
  ** Headers of the page
  hid指代属性的唯一性，如果页面有设置这个会覆盖这个
  */
  head: {
    title: '钢材价格行情列表_我的钢铁',
    meta: [
      { charset: 'utf-8', hid: 'charset'},
      { "http-equiv": 'X-UA-Compatible', hid: 'http-equiv', content: 'IE=edge,chrome=1' },
      { renderer: 'X-UA-Compatible', hid: 'renderer', content: 'webkit' },
      { name: 'viewport', hid: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', hid: 'description', content: '我的钢铁网提供最新最全的价格行情' },
      { name: 'keywords', hid: 'keywords', content: '价格行情' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ['jsonp'],
    publicPath: 'https://a.mysteelcdn.com/test/vuedemo/'
  },
  /*
  ** 扩展路由，支持访问html页面
  */
  router: {
    base: '/test/vuedemo/',  //必须设置，设置为页面发布路径 比如：http://news.mysteel.com/test/vuedemo/list/index.html
    extendRoutes(routes) {
      routes.push({
        name: 'listhtml',
        path: '/list/*.html',
        component: 'pages/list/index.vue'
      })
    }
  }
}

