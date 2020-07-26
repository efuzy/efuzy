const { existsSync } = require('fs')
const { sep, normalize, join } = require('path')

module.exports = function () {
  let dir = process.cwd()

  while (dir.length && dir[dir.length - 1] !== sep) {
    if (existsSync(join(dir, 'efuzy.conf.js'))) {
      const { fatal } = require('./logger')
      fatal(`⚠️  Error. This command must NOT be executed inside a Efuzy project folder.`)
    }

    dir = normalize(join(dir, '..'))
  }
}
