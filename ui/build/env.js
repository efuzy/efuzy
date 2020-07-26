const
  host = process.env.HOST || '0.0.0.0',
  port = process.env.PORT || (process.env.EFUZY_SSR ? 8554 : 8080)

const uri = `http://${host}:${port}`

module.exports = {
  efuzyVersion: require('../package.json').version,
  host,
  port,
  uri,
  displayURI: uri.replace(`//0.0.0.0:`, `//localhost:`),
  rtl: process.env.EFUZY_RTL !== void 0,
  devServerConfig: {
    publicPath: '/',
    host,
    port,
    stats: 'none',
    hot: true,
    inline: true,
    overlay: true,
    quiet: true,
    historyApiFallback: true,
    noInfo: true,
    disableHostCheck: true,
    contentBase: [
      require('path').resolve(__dirname, '../dev')
    ]
  }
}
