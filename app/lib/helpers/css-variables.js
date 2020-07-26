const fs = require('fs')
const { join } = require('path')

const appPaths = require('../app-paths')

const cssVariables = {
  efuzySrcExt: 'css',

  appFile: {
    styl: fs.existsSync(appPaths.resolve.src('css/efuzy.variables.styl')),
    scss: fs.existsSync(appPaths.resolve.src('css/efuzy.variables.scss')),
    sass: fs.existsSync(appPaths.resolve.src('css/efuzy.variables.sass'))
  },

  loaders: {
    styl: join(__dirname, '../webpack/loader.efuzy-stylus-variables'),
    scss: join(__dirname, '../webpack/loader.efuzy-scss-variables'),
    sass: join(__dirname, '../webpack/loader.efuzy-sass-variables')
  }
}

for (ext of Object.keys(cssVariables.appFile)) {
  if (cssVariables.appFile[ext]) {
    cssVariables.efuzySrcExt = ext === 'scss' ? 'sass' : ext
    break
  }
}

module.exports = cssVariables
