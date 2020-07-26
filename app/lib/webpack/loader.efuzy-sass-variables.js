const cssVariables = require('../helpers/css-variables')

const ext = cssVariables.appFile.sass
  ? 'sass'
  : (cssVariables.appFile.scss ? 'scss' : false)

const prefix = ext !== false
  ? `@import '~src/css/efuzy.variables.${ext}', 'efuzy/src/css/variables.sass'\n`
  : `@import 'efuzy/src/css/variables.sass'\n`

module.exports = function (content) {
  return content.indexOf('$') !== -1
    ? prefix + content
    : content
}
