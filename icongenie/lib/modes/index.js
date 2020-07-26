const { existsSync } = require('fs')
const { resolveDir } = require('../utils/app-paths')

module.exports = existsSync(resolveDir('public'))
  ? require('./efuzy-app-v2')
  : require('./efuzy-app-v1')
