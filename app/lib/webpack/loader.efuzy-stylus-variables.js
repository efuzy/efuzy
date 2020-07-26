const cssVariables = require('../helpers/css-variables')

const prefix = cssVariables.appFile.styl
  ? `@import '~src/css/efuzy.variables.styl'\n@import '~efuzy/src/css/variables.styl'\n`
  : `@import '~efuzy/src/css/variables.styl'\n`

module.exports = function (content) {
  return content.indexOf('$') !== -1
    ? prefix + content
    : content
}
